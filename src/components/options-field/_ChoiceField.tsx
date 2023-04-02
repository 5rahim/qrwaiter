import { ItemChoice, ItemChoiceOption } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { IoMdAddCircle } from '@react-icons/all-files/io/IoMdAddCircle'
import { Button } from '@ui/main/forms/button/Button'
import { IconButton } from '@ui/main/forms/button/IconButton'
import { TextInput } from '@ui/main/forms/input/TextInput'
import { RadioGroup } from '@ui/main/forms/radio/RadioGroup'
import _ from 'lodash'
import React, { useCallback, useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export interface ChoiceFieldProps extends React.ComponentPropsWithRef<'div'> {
   name: string
   defaultValues?: ItemChoice[]
}

export const ChoiceField = React.forwardRef<HTMLDivElement, ChoiceFieldProps>((props, ref) => {
   
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
   
   const controlledFields: ItemChoice[] = fields.map((field, index) => {
      return {
         ...field,
         ...watch(name)[index],
      }
   })
   
   const findItemIndex = useCallback((id: string) => _.findIndex(controlledFields, n => n.id === id), [controlledFields])
   const findItem = useCallback((id: string) => _.find(controlledFields, n => n.id === id), [controlledFields])
   
   useEffect(() => {
      // console.log('fields', controlledFields)
   }, [controlledFields])
   
   const editItem = (id: string, property: string, value: any) => {
      const item = findItem(id)
      console.log('current item', controlledFields)
      if (item) {
         update(findItemIndex(id), _.update(item, property, n => value))
         update(findItemIndex(id), _.update(item, 'choiceOptions', n => item.choiceOptions))
      }
   }
   
   const removeItem = (id: string) => {
      setValue(name, controlledFields.filter(n => n.id !== id))
   }
   
   const addOption = useCallback((id: string) => {
      let item = findItem(id)
      if (item) {
         const choices = [...item.choiceOptions, { id: crypto.randomUUID(), value: '', available: true }]
         update(findItemIndex(id), _.update(item, 'choiceOptions', n => choices))
      }
   }, [controlledFields])
   
   
   /**
    * This doesn't sanitize because the form uses the previous value instead
    */
   useEffect(() => {
      if (formState.isSubmitting) {
         setValue(name, controlledFields?.filter(v => v.name !== '')?.map(o => ({
            ...o, choiceOptions: o.choiceOptions?.filter(a => a.value !== ''),
         })))
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
                  <div key={item.id} className="border rounded-md">
                     <div className="flex w-full gap-2 items-start p-4 bg-gray-50 border-b">
                        <div className="w-full">
                           <TextInput
                              label="Choice name"
                              placeholder="e.g: Choice of sides, Meat temperature"
                              help="Choices do not affect the price of an item."
                              {...register(`${name}.${index}.name` as const)}
                           />
                           <RadioGroup
                              fieldClassName="mt-2 flex w-full"
                              fieldLabelClassName="text-base sm:text-base md:text-base"
                              stackClassName="flex flex-row gap-2 p-1 bg-gray-100 rounded-md w-[fit-content]"
                              radioWrapperClassName="block w-[fit-content] py-1 px-3 cursor-pointer transition rounded-md data-checked:bg-white data-checked:shadow-md text-gray-500 data-checked:text-black"
                              radioControlClassName="hidden"
                              radioLabelClassName="font-semibold flex-none flex"
                              radioHelpClassName="text-base"
                              defaultValue={item.type}
                              onChange={v => editItem(item.id, 'type', v)}
                              options={[{ value: 'single', label: 'One choice' }, { value: 'multiple', label: 'Multiple choices' }]}
                           />
                        </div>
                        <IconButton
                           icon={<BiTrash />} intent="alert-basic" className="mt-9" size="sm" onClick={(e) => {
                           e.preventDefault()
                           removeItem(item.id)
                        }}
                        />
                     
                     </div>
                     
                     <div className="mt-2 flex gap-2 p-4">
                        <div className="flex flex-col gap-2 w-full">
                           {item.choiceOptions?.map((subItem: ItemChoiceOption, i) => {
                              return <div key={subItem.id} className="flex w-full gap-2 items-center">
                                 <TextInput
                                    value={subItem.value} onChange={(e) => {
                                    e.preventDefault()
                                    // editItem(item.id, subItem.id, index, e.target.value)
                                 }} placeholder="Value"
                                 />
                                 <IconButton
                                    icon={<BiTrash />} intent="alert-basic" size="sm" onClick={(e) => {
                                    e.preventDefault()
                                    // removeSubOption(item.id, subItem.id, index)
                                 }}
                                 />
                              </div>
                           })}
                           <IconButton
                              icon={<IoMdAddCircle />} intent="primary-subtle" size="sm" onClick={(e) => {
                              e.preventDefault()
                              addOption(item.id)
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
                     id: crypto.randomUUID(),
                     name: "",
                     choiceOptions: [],
                     type: 'single',
                     available: true,
                  })
               }}
               leftIcon={<BiPlus />}
               intent="primary-subtle"
               size="sm"
               contentWidth
            >
               Add a choice
            </Button>
         </div>
      </>
   )
   
})

export function sanitizeChoiceField(choiceOptions: any) {
   return choiceOptions?.filter((v: any) => v.name !== '')?.map((o: any) => ({
      ...o, choiceOptions: o.choiceOptions?.filter((a: any) => a.value !== ''),
   }))
}
