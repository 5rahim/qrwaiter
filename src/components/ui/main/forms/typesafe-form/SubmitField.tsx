import { useMutationLoading } from '@/atoms/app.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { Button, ButtonProps } from '@ui/main/forms/button/Button'
import LoadingScreen from '@ui/shared/loading-spinner/LoadingScreen'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import _ from 'lodash'
import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

export interface SubmitFieldProps extends Omit<ButtonProps, "type"> {
   uploadHandler?: any
   role: "submit" | "save" | "create" | "add" | "search" | "update"
   disabledOnSuccess?: boolean
   disableIfInvalid?: boolean
}

export const SubmitField = React.forwardRef<HTMLButtonElement, SubmitFieldProps>((props, ref) => {
   
   const {
      children,
      isLoading,
      isDisabled,
      uploadHandler,
      role = "save",
      disabledOnSuccess = role === 'create',
      disableIfInvalid = false,
      ...rest
   } = props
   
   const { formState } = useFormContext()
   const t = useAppTranslation()
   const ml = useMutationLoading()
   
   const disableSuccess = useMemo(() => disabledOnSuccess ? formState.isSubmitSuccessful : false, [formState.isSubmitSuccessful])
   const disableInvalid = useMemo(() => disableIfInvalid ? !formState.isValid : false, [formState.isValid])
   
   return (
      <>
         <ShowOnly when={role === 'create'}>
            <LoadingScreen show={formState.isSubmitSuccessful} />
         </ShowOnly>
         
         <Button
            type="submit"
            isLoading={formState.isSubmitting || isLoading || uploadHandler?.isLoading}
            isDisabled={disableInvalid || isDisabled || disableSuccess}
            ref={ref}
            {...rest}
         >
            {children ? children : _.capitalize(role)}
         </Button>
      </>
   )
   
})
