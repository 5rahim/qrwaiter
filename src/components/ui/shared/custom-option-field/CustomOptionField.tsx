import { useAppTranslation } from '@/hooks/use-app-translation'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { _removeObjectById, _selectObjectById, _updateObjectById } from '@/utils/arrays'
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { FaRegListAlt } from '@react-icons/all-files/fa/FaRegListAlt'
import { IoMdAddCircle } from '@react-icons/all-files/io/IoMdAddCircle'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { Button } from '@ui/main/forms/button/Button'
import { IconButton } from '@ui/main/forms/button/IconButton'
import { TextInput } from '@ui/main/forms/input/TextInput'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export type CustomOptionField_SubItem = { value: string, id: string }

export type CustomOptionField_Item = {
   id: string,
   name: string,
   options: CustomOptionField_SubItem[]
}

export interface CustomOptionFieldProps extends React.ComponentPropsWithRef<'div'> {
   name: string
   defaultValues?: CustomOptionField_Item[]
}

export const CustomOptionField = React.forwardRef<HTMLDivElement, CustomOptionFieldProps>((props, ref) => {
   
   const {
      children,
      className,
      name,
      defaultValues,
      ...rest
   } = props
   
   const t = useAppTranslation()
   
   const { control, watch, register, formState, setValue } = useFormContext()
   
   const { fields, append, update } = useFieldArray({
      control,
      name: name,
   })
   
   const watchFieldArray = watch(name)
   const controlledFields: CustomOptionField_Item[] = fields.map((field, index) => {
      return {
         ...field,
         ...watchFieldArray[index],
      }
   })
   
   function addSubOption(itemId: string, index: number) {
      const subItems = _selectObjectById<CustomOptionField_Item>(itemId)(controlledFields)?.options
      if (subItems) {
         const newArr = [...subItems, { id: crypto.randomUUID(), value: '' }]
         const updatedItems = _updateObjectById(itemId, 'options', newArr)(controlledFields)
         update(index, _selectObjectById(itemId)(updatedItems))
      }
   }
   
   function editSubItem(itemId: string, subItemId: string, index: number, value: string) {
      const subItems = _selectObjectById<CustomOptionField_Item>(itemId)(controlledFields)?.options
      if (subItems) {
         const updatedSubItems = _updateObjectById(subItemId, 'value', value)(subItems)
         const updatedItems = _updateObjectById(itemId, 'options', updatedSubItems)(controlledFields)
         update(index, _selectObjectById(itemId)(updatedItems))
      }
   }
   
   function removeSubOption(itemId: string, subItemId: string, index: number) {
      const subItems = _selectObjectById<CustomOptionField_Item>(itemId)(controlledFields)?.options
      if (subItems) {
         const updatedSubItems = _removeObjectById(subItemId)(subItems)
         const updatedItems = _updateObjectById(itemId, 'options', updatedSubItems)(controlledFields)
         update(index, _selectObjectById(itemId)(updatedItems))
      }
   }
   
   function removeItem(itemId: string) {
      const updatedItems = _removeObjectById(itemId)(controlledFields)
      setValue(name, updatedItems)
   }
   
   /**
    * This doesn't sanitize because the form uses the previous value instead
    */
   useEffect(() => {
      if (formState.isSubmitting) {
         setValue(name, controlledFields?.filter(v => v.name !== '')?.map(o => ({ ...o, options: o.options?.filter(a => a.value !== '') })))
      }
   }, [formState.isSubmitting])
   
   return (
      <>
         <div
            className={cn(
               "flex flex-col gap-4",
               className,
            )}
            {...rest}
            ref={ref}
         >
            {controlledFields.map((item, index) => {
               return (
                  <div key={item.id}>
                     <div className="flex gap-2 items-end">
                        <TextInput label={t('form:option_name')} {...register(`${name}.${index}.name` as const)} />
                        <IconButton
                           icon={<BiTrash />} intent="alert-basic" className="mb-1" size="sm" onClick={(e) => {
                           e.preventDefault()
                           removeItem(item.id)
                        }}
                        />
                     </div>
                     
                     <div className="mt-2 flex gap-2">
                        <IconDisplay icon={<FaRegListAlt />} intent="gray-basic" size="sm" />
                        <div className="flex flex-col gap-2">
                           {item.options?.map((subItem: CustomOptionField_SubItem, i) => {
                              return <div key={subItem.id} className="flex gap-2 items-center">
                                 <TextInput
                                    value={subItem.value} onChange={(e) => {
                                    e.preventDefault()
                                    editSubItem(item.id, subItem.id, index, e.target.value)
                                 }} placeholder={t('form:add_option')}
                                 />
                                 <IconButton
                                    icon={<BiTrash />} intent="alert-basic" size="sm" onClick={(e) => {
                                    e.preventDefault()
                                    removeSubOption(item.id, subItem.id, index)
                                 }}
                                 />
                              </div>
                           })}
                           <IconButton
                              icon={<IoMdAddCircle />} size="sm" onClick={(e) => {
                              e.preventDefault()
                              addSubOption(item.id, index)
                           }}
                           />
                        </div>
                     </div>
                  </div>
               )
            })}
            <Button
               onClick={(e) => {
                  e.preventDefault()
                  append({
                     name: "",
                     options: [],
                  })
               }}
               leftIcon={<BiPlus />}
               intent="primary-subtle"
               size="sm"
               contentWidth
            >
               {t('form:add')}
            </Button>
         </div>
      </>
   )
   
})

export function sanitizeCustomOptionField(options: any) {
   return options?.filter((v: any) => v.name !== '')?.map((o: any) => ({ ...o, options: o.options?.filter((a: any) => a.value !== '') }))
}
