'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { MaybeRenderProp } from '@/types'
import { runIfFn } from '@/utils/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@ui/main/layout/stack/Stack'
import _ from 'lodash'
import React, { forwardRef } from 'react'
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, useForm, UseFormProps, UseFormReturn, WatchObserver } from 'react-hook-form'
import { z as zod } from 'zod'

export type UseFormValidationSchema<TFieldValues> = ({ z, errorMessage }: { z: typeof zod, errorMessage: string }) => zod.ZodType<TFieldValues>

interface FormOptions<TFieldValues extends FieldValues> {
   /**
    * The form schema, currently supports Zod schema only.
    */
   schema: UseFormValidationSchema<TFieldValues> | zod.ZodObject<TFieldValues>
   /**
    * Triggers when any of the field change.
    */
   onChange?: WatchObserver<TFieldValues>
   /**
    * The submit handler.
    */
   onSubmit: SubmitHandler<TFieldValues>
   /**
    * Triggers when there are validation errors.
    */
   onError?: SubmitErrorHandler<TFieldValues>
   /**
    * Ref on the HTMLFormElement.
    */
   formRef?: React.RefObject<HTMLFormElement>
   /**
    * The form children, can be a render prop or a ReactNode.
    */
   children?: MaybeRenderProp<UseFormReturn<TFieldValues>>
   /**
    * Styles
    * @example Default: gap-3
    */
   stackClassName?: string
}

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
   extends UseFormProps<TFieldValues>,
      Omit<React.ComponentPropsWithRef<"form">,
         'children' | 'onChange' | 'onSubmit' | 'onError' | 'ref'>,
      FormOptions<TFieldValues> {
}

const LegacyForm: React.FC<FormProps> = forwardRef(
   <TFieldValues extends FieldValues = FieldValues>(props: FormProps<TFieldValues>, ref: React.ForwardedRef<UseFormReturn<TFieldValues>>) => {
      
      const links = useLinks()
      const t = useAppTranslation()
      
      const {
         mode = 'all',
         resolver,
         reValidateMode,
         shouldFocusError,
         shouldUnregister,
         shouldUseNativeValidation,
         criteriaMode,
         delayError,
         schema,
         defaultValues,
         onChange,
         onSubmit,
         onError,
         formRef,
         children,
         
         stackClassName,
         ...rest
      } = props
      
      const form = {
         mode,
         resolver,
         defaultValues,
         reValidateMode,
         shouldFocusError,
         shouldUnregister,
         shouldUseNativeValidation,
         criteriaMode,
         delayError,
      }
      
      let finalSchema: zod.Schema<TFieldValues>
      if (schema && _.isFunction(schema)) {
         finalSchema = schema({ z: zod, errorMessage: 'Invalid field' })
         form.resolver = zodResolver(finalSchema)
      } else {
         form.resolver = zodResolver(schema)
      }
      // if (schema) {
      // }
      
      // const methods = useForm<zod.infer<typeof finalSchema>>(form)
      const methods = useForm(form)
      const { handleSubmit } = methods
      
      // This exposes the useForm api through the forwarded ref
      React.useImperativeHandle(ref, () => methods, [ref, methods])
      
      React.useEffect(() => {
         let subscription: any
         if (onChange) {
            subscription = methods.watch(onChange)
         }
         return () => subscription?.unsubscribe()
      }, [methods, onChange])
      
      return (
         <>
            <FormProvider {...methods}>
               <form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit, onError)}
                  {...rest}
               >
                  <Stack className={cn("w-full gap-3", stackClassName)}>
                     {runIfFn(children, methods)}
                  </Stack>
               </form>
            </FormProvider>
         </>
      )
      
   },
) as (<TFieldValues extends FieldValues>(
   props: FormProps<TFieldValues> & {
      ref?: React.ForwardedRef<UseFormReturn<TFieldValues>>
   },
) => React.ReactElement)

export default LegacyForm
