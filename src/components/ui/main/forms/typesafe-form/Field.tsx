'use client'

import { useMutationLoading } from '@/atoms/app.atom'
import { useCurrentCountry } from '@/atoms/country.atom'
import { useCurrentLocale } from '@/atoms/locale.atom'
import { gcs_uploadFiles, GcsFileUploadObject } from '@/lib/gcs/gcs-file-upload'
import { callAllHandlers } from '@/utils/components'
import { createPolymorphicComponent } from '@/utils/polymorphic-component'
import { AddressInput, AddressInputProps } from '@ui/main/forms/address-input/AddressInput'
import { BasicField, BasicFieldOptions } from '@ui/main/forms/basic-field/BasicField'
import { Checkbox, CheckboxProps } from '@ui/main/forms/checkbox/Checkbox'
import { CheckboxGroup, CheckboxGroupProps } from '@ui/main/forms/checkbox/CheckboxGroup'
import { ColorAreaPicker, ColorAreaPickerProps } from '@ui/main/forms/color/ColorAreaPicker'
import { DatePicker, DatePickerProps } from '@ui/main/forms/date-time/date-picker/DatePicker'
import { DateRangePicker, DateRangePickerProps } from '@ui/main/forms/date-time/date-picker/DateRangePicker'
import { TimeInput, TimeInputProps } from '@ui/main/forms/date-time/date-picker/TimeInput'
import ImageGridInput, { ImageGridInputProps } from '@ui/main/forms/image-grid-input/ImageGridInput'
import { NumberInput, NumberInputProps } from '@ui/main/forms/input/NumberInput'
import { TextInput, TextInputProps } from '@ui/main/forms/input/TextInput'
import { MultiSelect, MultiSelectProps } from '@ui/main/forms/multi-select/MultiSelect'
import { PhoneNumberInput, PhoneNumberInputProps } from '@ui/main/forms/phone-number-input/PhoneNumberInput'
import { PriceInput, PriceInputProps } from '@ui/main/forms/price-input/PriceInput'
import { RadioGroup, RadioGroupProps } from '@ui/main/forms/radio/RadioGroup'
import { Select, SelectProps } from '@ui/main/forms/select/Select'
import { Switch, SwitchProps } from '@ui/main/forms/switch/Switch'
import { Textarea, TextareaProps } from '@ui/main/forms/textarea/Textarea'
import { SubmitField } from '@ui/main/forms/typesafe-form/SubmitField'
import { useFormSchema } from '@ui/main/forms/typesafe-form/TypesafeForm'
import { Dropzone, DropzoneProps } from '@ui/shared/file-upload/Dropzone'
import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import { Controller, FormState, get, useController, useFormContext } from 'react-hook-form'


export interface FieldBaseProps extends Omit<BasicFieldOptions, "name"> {
   name: string
   onChange?: any
   onBlur?: any
   isRequired?: boolean
}

type FieldComponent<T> = T & FieldBaseProps

export interface FieldProps extends React.ComponentPropsWithRef<'div'> {

}

const _Field: any = {}

export function withControlledInput<T extends FieldBaseProps>(InputComponent: React.FC<T>) {
   return forwardRef<FieldProps, T>(
      (props, ref) => {
         const { control, formState } = useFormContext()
         const schema = useFormSchema()
         
         const isRequired = useMemo(() => !!get(schema, props.name)?.nonempty, [schema])
         
         return (
            <Controller
               name={props.name}
               control={control}
               rules={{ required: props.isRequired }}
               render={(render) => (
                  <InputComponent
                     {...props} // BasicFieldOptions and other component specific props...
                     defaultValue={get(formState.defaultValues, props.name)}
                     onChange={callAllHandlers(props.onChange, render.field.onChange)}
                     onBlur={callAllHandlers(props.onBlur, render.field.onBlur)}
                     error={getFormError(render.field.name, render.formState)?.message}
                     isRequired={isRequired}
                     ref={ref}
                  />
               )}
            />
         )
      },
   )
}

/**
 * Causes hydration issues because it populates the input once the component is rendered on the client
 */
export const withUncontrolledInput = <T extends FieldBaseProps>(InputComponent: React.FC<T>) => {
   return forwardRef<HTMLInputElement, T>(
      (props, ref) => {
         const { register, formState } = useFormContext()
         const { ref: _ref, ...field } = register(props.name)
         
         return (
            <InputComponent
               {...props}
               onChange={callAllHandlers(props.onChange, field.onChange)}
               onBlur={callAllHandlers(props.onBlur, field.onBlur)}
               error={getFormError(props.name, formState)?.message}
               name={field.name}
               ref={useMergeRefs(ref, _ref)}
            />
         )
      },
   )
}

export const TextInputField = React.memo(withControlledInput<FieldComponent<TextInputProps>>(forwardRef<HTMLInputElement, FieldComponent<TextInputProps>>(
   (props, ref) => {
      return <TextInput {...props} ref={ref} />
   },
)))
export const TextareaField = React.memo(withControlledInput<FieldComponent<TextareaProps>>(forwardRef<HTMLTextAreaElement, FieldComponent<TextareaProps>>(
   (props, ref) => {
      return <Textarea {...props} ref={ref} />
   },
)))
export const ColorAreaField = React.memo(withControlledInput<FieldComponent<ColorAreaPickerProps>>(forwardRef<HTMLDivElement, FieldComponent<ColorAreaPickerProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <ColorAreaPicker
         defaultValue={get(context.formState.defaultValues, props.name)}
         {...props}
         ref={ref}
      />
   },
)))
export const DatePickerField = React.memo(withControlledInput<FieldComponent<DatePickerProps>>(forwardRef<HTMLDivElement, FieldComponent<DatePickerProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <DatePicker
         defaultValue={get(context.formState.defaultValues, props.name)}
         {...props}
         ref={ref}
      />
   },
)))
export const DateRangePickerField = React.memo(withControlledInput<FieldComponent<DateRangePickerProps>>(forwardRef<HTMLDivElement, FieldComponent<DateRangePickerProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <DateRangePicker
         defaultValue={get(context.formState.defaultValues, props.name)}
         {...props}
         ref={ref}
      />
   },
)))
export const TimeField = React.memo(withControlledInput<FieldComponent<TimeInputProps>>(forwardRef<HTMLDivElement, FieldComponent<TimeInputProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <TimeInput
         defaultValue={get(context.formState.defaultValues, props.name)}
         {...props}
         ref={ref}
      />
   },
)))
export const SelectField = React.memo(withControlledInput<FieldComponent<SelectProps>>(forwardRef<HTMLSelectElement, FieldComponent<SelectProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <Select
         defaultValue={get(context.formState.defaultValues, props.name)}
         {...props}
         ref={ref}
      />
   },
)))
export const NumberField = React.memo(withControlledInput<FieldComponent<NumberInputProps>>(forwardRef<HTMLInputElement, FieldComponent<NumberInputProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <NumberInput
         {...props}
         defaultValue={get(context.formState.defaultValues, props.name)}
         ref={ref}
      />
   },
)))
export const MultiSelectField = React.memo(withControlledInput<FieldComponent<MultiSelectProps>>(forwardRef<HTMLInputElement, FieldComponent<MultiSelectProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <MultiSelect
         {...props}
         defaultValue={get(context.formState.defaultValues, props.name)}
         ref={ref}
      />
   },
)))


export const ImageGridField = React.memo(withControlledInput<FieldComponent<ImageGridInputProps>>(forwardRef<HTMLDivElement, FieldComponent<ImageGridInputProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <ImageGridInput
         {...props}
         defaultImages={get(context.formState.defaultValues, props.name)}
      />
   },
)))
export const SwitchField = React.memo(withControlledInput<FieldComponent<SwitchProps>>(forwardRef<HTMLDivElement, FieldComponent<SwitchProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <Switch
         {...props}
         defaultChecked={get(context.formState.defaultValues, props.name)}
         ref={ref}
      />
   },
)))
export const CheckboxField = React.memo(withControlledInput<FieldComponent<CheckboxProps>>(forwardRef<HTMLDivElement, FieldComponent<CheckboxProps>>(
   (props, ref) => {
      const context = useFormContext()
      return <Checkbox {...props} defaultChecked={get(context.formState.defaultValues, props.name)} ref={ref} />
   },
)))
export const CheckboxGroupField = React.memo(withControlledInput<FieldComponent<CheckboxGroupProps>>(forwardRef<HTMLDivElement, FieldComponent<CheckboxGroupProps>>(
   ({ name, ...props }, ref) => {
      const context = useFormContext()
      const control = useController({ name: name })
      return <CheckboxGroup
         name={name}
         onChange={control.field.onChange}
         defaultValues={get(context.formState.defaultValues, name)}
         error={get(context.formState.errors, name)?.message}
         {...props}
         ref={ref}
      />
   },
)))
export const RadioGroupField = React.memo(withControlledInput<FieldComponent<RadioGroupProps>>(forwardRef<HTMLInputElement, FieldComponent<RadioGroupProps>>(
   ({ name, ...props }, ref) => {
      const context = useFormContext()
      const control = useController({ name: name })
      return <RadioGroup
         name={name}
         onChange={control.field.onChange}
         defaultValue={get(context.formState.defaultValues, name)}
         error={get(context.formState.errors, name)?.message}
         {...props}
         ref={ref}
      />
   },
)))

export const RadioCardsField = React.memo(withControlledInput<FieldComponent<RadioGroupProps>>(forwardRef<HTMLInputElement, FieldComponent<RadioGroupProps>>(
   ({ name, ...props }, ref) => {
      const context = useFormContext()
      const control = useController({ name: name })
      return <RadioGroup
         name={name}
         onChange={control.field.onChange}
         defaultValue={get(context.formState.defaultValues, name)}
         error={get(context.formState.errors, name)?.message}
         fieldClassName="flex w-full"
         fieldLabelClassName="text-base sm:text-base md:text-base"
         stackClassName="flex flex-col md:flex-row gap-2"
         radioWrapperClassName="block w-full p-4 cursor-pointer transition border border-gray-200 rounded-md data-checked:bg-white data-checked:ring-2 data-checked:ring-brand-500"
         radioControlClassName="absolute right-2 top-2 h-5 w-5 text-xs"
         radioLabelClassName="font-semibold flex-none flex"
         radioHelpClassName="text-sm"
         {...props}
         ref={ref}
      />
   },
)))


export const SegmentedControlField = React.memo(withControlledInput<FieldComponent<RadioGroupProps>>(forwardRef<HTMLInputElement, FieldComponent<RadioGroupProps>>(
   ({ name, ...props }, ref) => {
      const context = useFormContext()
      const control = useController({ name: name })
      return <RadioGroup
         name={name}
         onChange={control.field.onChange}
         defaultValue={get(context.formState.defaultValues, name)}
         error={get(context.formState.errors, name)?.message}
         fieldClassName="flex w-full"
         fieldLabelClassName="text-base sm:text-base md:text-base"
         stackClassName="flex flex-row gap-2 p-1 bg-gray-50 rounded-md w-[fit-content]"
         radioWrapperClassName="block w-[fit-content] py-1 px-3 cursor-pointer transition rounded-md data-checked:bg-white data-checked:shadow-md text-gray-500 data-checked:text-black"
         radioControlClassName="hidden"
         radioLabelClassName="font-semibold flex-none flex"
         radioHelpClassName="text-base"
         {...props}
         ref={ref}
      />
   },
)))

type PhoneNumberInputFieldProps = Omit<PhoneNumberInputProps, "onChange" | "value">
export const PhoneNumberInputField = React.memo(withControlledInput<FieldComponent<PhoneNumberInputFieldProps>>(forwardRef<HTMLInputElement, FieldComponent<PhoneNumberInputFieldProps>>(
   (props, ref) => {
      const context = useFormContext()
      const controller = useController({ name: props.name })
      return <PhoneNumberInput
         {...props}
         onChange={callAllHandlers(props.onChange, controller.field.onChange)}
         value={get(context.formState.defaultValues, props.name)}
      />
   },
)))
export const PriceInputField = React.memo(withControlledInput<FieldComponent<PriceInputProps>>(forwardRef<HTMLInputElement, FieldComponent<PriceInputProps>>(
   (props, ref) => {
      const context = useFormContext()
      const country = useCurrentCountry()
      const { locale } = useCurrentLocale()
      return <PriceInput
         {...props}
         defaultValue={get(context.formState.defaultValues, props.name) ?? 0}
         country={country}
         locale={locale}
         ref={ref}
      />
   },
)))


type AddressInputFieldProps = Omit<AddressInputProps, "onChange" | "value"> & { restrictToCurrentCountry?: boolean }
export const AddressField = React.memo(withControlledInput<FieldComponent<AddressInputFieldProps>>(forwardRef<HTMLInputElement, FieldComponent<AddressInputFieldProps>>(
   ({ onChange, allowedCountries, restrictToCurrentCountry = false, ...props }, ref) => {
      const context = useFormContext()
      const country = useCurrentCountry()
      return <AddressInput
         {...props}
         defaultValue={get(context.formState.defaultValues, props.name)}
         error={get(context.formState.errors, props.name)?.message}
         allowedCountries={(restrictToCurrentCountry && country) ? [country] : allowedCountries}
         onChange={onChange}
      />
   },
)))
export const DropzoneField = React.memo(withControlledInput<FieldComponent<Omit<DropzoneProps, "onChange">> & { handler: any }>(forwardRef<HTMLInputElement, FieldComponent<DropzoneProps> & { handler: any }>(
   ({
      onChange,
      name,
      label,
      error,
      help,
      fieldDetailsClassName,
      fieldLabelClassName,
      fieldClassName,
      handler,
      ...props
   }, ref) => {
      const context = useFormContext()
      const controller = useController({ name })
      const basicFieldProps = { name, label, error, help, fieldDetailsClassName, fieldLabelClassName, fieldClassName }
      
      useEffect(() => {
         if (context.formState.isSubmitting && handler.required && !handler.hasFiles) {
            context.setError(name, { message: "Required" })
         }
      }, [context, handler])
      
      return <BasicField {...basicFieldProps}>
         <Dropzone
            onChange={(v) => {
               handler.populateFiles(v)
               controller.field.onChange(v)
            }}
            multiple={handler.multiple}
            accept={handler.accept}
            ref={ref}
            {...props}
         />
      </BasicField>
   },
)))


export const useDropzoneHandler = (singleOrMultiple: "single" | "multiple", {
   accept, required = false,
}: { accept?: { [key: string]: string[]; } | undefined, required: boolean }) => {
   const ml = useMutationLoading()
   const [files, setFiles] = useState<File[]>([])
   const [isUploading, setIsUploading] = useState(false)
   const [uploaded, setIsUploaded] = useState(false)
   
   return {
      
      /**
       * boolean
       */
      hasFiles: files.length > 0,
      
      isUploading,
      
      uploaded,
      required,
      accept,
      
      multiple: singleOrMultiple === "multiple",
      
      canUpload() {
         if (required && (!files || !(files.length > 0)))
            return false
         return true
      },
      
      /**
       * @param files
       */
      populateFiles: (files: any) => {
         setFiles(files)
      },
      
      deleteFiles: () => {
         setFiles([])
      },
      
      /**
       * @example
       * if (profilePictureUploader.canUpload()) {
       *    const images = await profilePictureUploader.uploadFiles()
       *    if (images) mutate({ ...data, pictures: images.map(i => i.url) })
       * }
       */
      uploadFiles: async (): Promise<GcsFileUploadObject | GcsFileUploadObject[] | null> => {
         
         let results: GcsFileUploadObject | GcsFileUploadObject[] | null = singleOrMultiple === 'multiple' ? [] : null
         
         ml.setMutationLoading(true)
         setIsUploading(true)
         const { objects, error } = await gcs_uploadFiles(files)
         ml.setMutationLoading(false)
         
         if (!error && objects) {
            setIsUploading(false)
            setIsUploaded(true)
            results = singleOrMultiple === 'multiple' ? objects! : objects[0]!
         }
         
         return results
         
      },
      
      uploadSingleFile: async (): Promise<GcsFileUploadObject | null> => {
         
         let results: GcsFileUploadObject | null = null
         
         setIsUploading(true)
         const { objects, error } = await gcs_uploadFiles(files)
         
         if (!error && objects) {
            setIsUploading(false)
            setIsUploaded(true)
            results = objects[0]!
         }
         
         return results
         
      },
      
   }
   
}

_Field.Text = TextInputField
_Field.Textarea = TextareaField
_Field.Select = SelectField
_Field.Switch = SwitchField
_Field.Checkbox = CheckboxField
_Field.CheckboxGroup = CheckboxGroupField
_Field.RadioGroup = RadioGroupField
_Field.RadioCards = RadioCardsField
_Field.SegmentedControl = SegmentedControlField
_Field.PhoneNumber = PhoneNumberInputField
_Field.Price = PriceInputField
_Field.Address = AddressField
_Field.Dropzone = DropzoneField
_Field.Number = NumberField
_Field.MultiSelect = MultiSelectField
_Field.ImageGrid = ImageGridField
_Field.DatePicker = DatePickerField
_Field.DateRangePicker = DateRangePickerField
_Field.Time = TimeField
_Field.ColorArea = ColorAreaField
_Field.Submit = SubmitField

export const Field = createPolymorphicComponent<'div', FieldProps, {
   Text: typeof TextInputField,
   Textarea: typeof TextareaField,
   Select: typeof SelectField,
   Switch: typeof SwitchField,
   Checkbox: typeof CheckboxField,
   CheckboxGroup: typeof CheckboxGroupField,
   RadioGroup: typeof RadioGroupField,
   RadioCards: typeof RadioCardsField,
   SegmentedControl: typeof SegmentedControlField,
   PhoneNumber: typeof PhoneNumberInputField,
   Price: typeof PriceInputField,
   Address: typeof AddressField,
   Dropzone: typeof DropzoneField,
   Number: typeof NumberField,
   MultiSelect: typeof MultiSelectField
   ImageGrid: typeof ImageGridField
   DatePicker: typeof DatePickerField
   DateRangePicker: typeof DateRangePickerField
   Time: typeof TimeField
   ColorArea: typeof ColorAreaField
   Submit: typeof SubmitField
}>(_Field)


// Utils
export const getFormError = (name: string, formState: FormState<{ [x: string]: any }>) => {
   return get(formState.errors, name)
}


export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>

export function assignRef<T = any>(
   ref: ReactRef<T> | null | undefined,
   value: T,
) {
   if (ref == null) return
   
   if (typeof ref === "function") {
      ref(value)
      return
   }
   
   try {
      ref.current = value
   }
   catch (error) {
      throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
   }
}

export function mergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
   return (node: T | null) => {
      refs.forEach((ref) => {
         assignRef(ref, node)
      })
   }
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
   // eslint-disable-next-line react-hooks/exhaustive-deps
   return useMemo(() => mergeRefs(...refs), refs)
}

const isTouched = (
   name: string,
   formState: FormState<{ [x: string]: any }>,
) => {
   return get(formState.touchedFields, name)
}

export type As<Props = any> = React.ElementType<Props>
