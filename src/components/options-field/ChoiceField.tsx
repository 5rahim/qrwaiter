import { ItemChoice, ItemChoiceOption } from '@/graphql/types'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { _updateObjectById } from '@/utils/arrays'
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { IoMdAddCircle } from '@react-icons/all-files/io/IoMdAddCircle'
import { Button } from '@ui/main/forms/button/Button'
import { IconButton } from '@ui/main/forms/button/IconButton'
import { TextInput } from '@ui/main/forms/input/TextInput'
import { RadioGroup } from '@ui/main/forms/radio/RadioGroup'
import { Switch } from '@ui/main/forms/switch/Switch'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useController } from 'react-hook-form'

export interface ChoiceFieldProps extends React.ComponentPropsWithRef<'div'> {
   defaultValues?: ItemChoice[]
}

export const ChoiceField = React.forwardRef<HTMLDivElement, ChoiceFieldProps>((props, ref) => {
   
   const {
      children,
      className,
      defaultValues,
      ...rest
   } = props
   
   const choicesController = useController({ name: 'choices' })
   
   const [choices, setChoices] = useState<ItemChoice[]>([])
   
   useEffect(() => {
      choicesController.field.onChange(choices)
   }, [choices])
   
   const editChoice = (id: string, property: string, value: any) => {
      setChoices(prev => {
         const choice = _.find(choices, ch => ch.id === id)
         if (choice) {
            return _updateObjectById<ItemChoice>(id, property, value)(prev)
         }
         return prev
      })
   }
   
   const editOption = (choiceId: string, subItemId: string, property: string, value: any) => {
      
      setChoices(prev => {
         const choice = _.find(prev, ch => ch.id === choiceId)
         if (choice) {
            const option = _.find(choice.options, co => co.id === subItemId) //_selectObjectById<ItemChoiceOption>(subItemId)(choice.options)
            if (option) {
               const updatedChoiceOptions = _updateObjectById<ItemChoiceOption>(subItemId, property, value)(choice.options)
               return _updateObjectById<ItemChoice>(choiceId, 'options', updatedChoiceOptions)(prev)
            }
            return prev
         }
         return prev
      })
      
   }
   
   const removeChoice = (id: string) => {
      setChoices(prev => prev.filter(n => n.id !== id))
   }
   
   const addOption = (id: string) => {
      setChoices(prev => {
         const choice = _.find(prev, ch => ch.id === id)
         if (choice) {
            return _updateObjectById<ItemChoice>(id, 'options', [...choice!.options,
               { id: `choiceItem_` + crypto.randomUUID(), value: '', available: true }])(prev)
         }
         return prev
      })
   }
   
   const removeOption = (choiceId: string, optionId: string) => {
      setChoices(prev => {
         const choice = _.find(prev, ch => ch.id === choiceId)
         if (choice) {
            return _updateObjectById<ItemChoice>(choiceId, 'options', choice.options.filter(n => n.id !== optionId))(prev)
         }
         return prev
      })
   }
   
   
   /**
    * This doesn't sanitize because the form uses the previous value instead
    */
   // useEffect(() => {
   //    if (formState.isSubmitting) {
   //       setValue(name, controlledFields?.filter(v => v.name !== '')?.map(o => ({
   //          ...o, options: o.options?.filter(a => a.value !== ''),
   //       })))
   //    }
   // }, [formState.isSubmitting])
   
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
            <p>Choices do not affect the price of an item.</p>
            {choices.map((choice, index) => {
               return (
                  <div key={choice.id} className="border rounded-md">
                     <div className="flex w-full gap-2 items-start p-4 border-b">
                        <div className="w-full space-y-4">
                           <TextInput
                              label="Choice name"
                              placeholder="e.g: Choice of sides, Meat temperature"
                              value={choice.name}
                              onChange={e => editChoice(choice.id, 'name', e.target.value ?? '')}
                              error={choice.options.length > 0 && choice.name.length === 0 ? 'Required' : undefined}
                              //{...register(`${name}.${index}.name` as const)}
                           />
                           <RadioGroup
                              fieldClassName="mt-2 flex w-full"
                              fieldLabelClassName="text-base sm:text-base md:text-base"
                              stackClassName="flex flex-row gap-2 p-1 bg-gray-100 rounded-md w-[fit-content]"
                              radioWrapperClassName="block w-[fit-content] py-1 px-3 cursor-pointer transition rounded-md data-checked:bg-white data-checked:shadow-md text-gray-500 data-checked:text-black"
                              radioControlClassName="hidden"
                              radioLabelClassName="font-semibold flex-none flex"
                              radioHelpClassName="text-base"
                              value={choice.type}
                              onChange={v => editChoice(choice.id, 'type', v)}
                              options={[{ value: 'single', label: 'One selection' }, { value: 'multiple', label: 'Multiple selections' }]}
                           />
                           <Switch
                              name="available"
                              label="Available"
                              defaultChecked={choice.available}
                              onChange={v => typeof v === 'boolean' && editChoice(choice.id, 'available', v)}
                              fieldClassName="!w-[fit-content] mt-2"
                           />
                        </div>
                        <IconButton
                           icon={<BiTrash />} intent="alert-basic" className="mt-9" size="sm" onClick={(e) => {
                           e.preventDefault()
                           removeChoice(choice.id)
                        }}
                        />
                     
                     </div>
                     
                     <div className="mt-2 flex gap-2 p-4">
                        <div className="flex flex-col gap-2 w-full">
                           {choice.options?.map((option: ItemChoiceOption, i) => {
                              return <div key={option.id} className="flex w-full gap-2 items-center">
                                 <TextInput
                                    value={option.value} onChange={(e) => {
                                    e.preventDefault()
                                    editOption(choice.id, option.id, 'value', e.target.value ?? '')
                                 }} placeholder="Value"
                                    className="w-full"
                                 />
                                 <Switch
                                    name="available"
                                    label="Available"
                                    defaultChecked={option.available}
                                    onChange={v => typeof v === 'boolean' && editOption(choice.id, option.id, 'available', v)}
                                    fieldClassName="!w-[fit-content]"
                                 />
                                 <IconButton
                                    icon={<BiTrash />} intent="alert-basic" size="sm" onClick={(e) => {
                                    e.preventDefault()
                                    removeOption(choice.id, option.id)
                                 }}
                                 />
                              </div>
                           })}
                           <IconButton
                              icon={<IoMdAddCircle />} intent="primary-outline" size="sm" onClick={(e) => {
                              e.preventDefault()
                              addOption(choice.id)
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
                  setChoices(prev => [...prev, { id: `choice_` + crypto.randomUUID(), name: "", options: [], type: 'single', available: true }])
               }}
               leftIcon={<BiPlus />}
               intent="primary-outline"
               size="md"
               contentWidth
            >
               Add a choice
            </Button>
         </div>
      </>
   )
   
})

export function sanitizeChoiceField(options: any) {
   return options?.filter((v: any) => v.name !== '')?.map((o: any) => ({
      ...o, options: o.options?.filter((a: any) => a.value !== ''),
   }))
}
