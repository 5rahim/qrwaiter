import { ItemChoice, ItemVariation, ItemVariationOption } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { _updateObjectById } from '@/utils/arrays'
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { IoMdAddCircle } from '@react-icons/all-files/io/IoMdAddCircle'
import { Button } from '@ui/main/forms/button/Button'
import { IconButton } from '@ui/main/forms/button/IconButton'
import { TextInput } from '@ui/main/forms/input/TextInput'
import { PriceInput } from '@ui/main/forms/price-input/PriceInput'
import { Switch } from '@ui/main/forms/switch/Switch'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useController } from 'react-hook-form'

export interface VariationFieldProps extends React.ComponentPropsWithRef<'div'> {
   defaultValues?: ItemVariation[]
}

export const VariationField = React.forwardRef<HTMLDivElement, VariationFieldProps>((props, ref) => {
   
   const {
      children,
      className,
      defaultValues = [],
      ...rest
   } = props
   
   const t = useAppTranslation()
   
   const variationsController = useController({ name: 'variations' })
   
   const [variations, setVariations] = useState<ItemVariation[]>(defaultValues)
   
   useEffect(() => {
      variationsController.field.onChange(variations)
   }, [variations])
   
   const editVariation = (id: string, property: string, value: any) => {
      setVariations(prev => {
         const variation = _.find(variations, ch => ch.id === id)
         if (variation) {
            return _updateObjectById<ItemVariation>(id, property, value)(prev)
         }
         return prev
      })
   }
   
   const editOption = (variationId: string, subItemId: string, property: string, value: any) => {
      
      setVariations(prev => {
         const variation = _.find(prev, ch => ch.id === variationId)
         if (variation) {
            const option = _.find(variation.options, co => co.id === subItemId) //_selectObjectById<ItemVariationOption>(subItemId)(variation.options)
            if (option) {
               const updatedVariationOptions = _updateObjectById<ItemVariationOption>(subItemId, property, value)(variation.options)
               return _updateObjectById<ItemVariation>(variationId, 'options', updatedVariationOptions)(prev)
            }
            return prev
         }
         return prev
      })
      
   }
   
   const removeVariation = (id: string) => {
      setVariations(prev => prev.filter(n => n.id !== id))
   }
   
   const addOption = (id: string) => {
      setVariations(prev => {
         const variation = _.find(prev, ch => ch.id === id)
         if (variation) {
            return _updateObjectById<ItemVariation>(id, 'options', [...variation!.options,
               { id: `variationItem_` + crypto.randomUUID(), value: '', available: true, price: 0 }])(prev)
         }
         return prev
      })
   }
   
   const removeOption = (variationId: string, optionId: string) => {
      setVariations(prev => {
         const variation = _.find(prev, ch => ch.id === variationId)
         if (variation) {
            return _updateObjectById<ItemVariation>(variationId, 'options', variation.options.filter(n => n.id !== optionId))(prev)
         }
         return prev
      })
   }
   
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
            <p>Variations affect the price of an item.</p>
            {variations.map((variation, index) => {
               return (
                  <div key={variation.id} className="border rounded-md">
                     <div className="flex w-full gap-2 items-start p-4 border-b">
                        <div className="w-full space-y-4">
                           <TextInput
                              label="Variation name"
                              placeholder="e.g: Size"
                              value={variation.name}
                              onChange={e => editVariation(variation.id, 'name', e.target.value ?? '')}
                              error={variation.options.length > 0 && variation.name.length === 0 ? 'Required' : undefined}
                              //{...register(`${name}.${index}.name` as const)}
                           />
                           {/*<RadioGroup*/}
                           {/*   fieldClassName="mt-2 flex w-full"*/}
                           {/*   fieldLabelClassName="text-base sm:text-base md:text-base"*/}
                           {/*   stackClassName="flex flex-row gap-2 p-1 bg-gray-100 rounded-md w-[fit-content]"*/}
                           {/*   radioWrapperClassName="block w-[fit-content] py-1 px-3 cursor-pointer transition rounded-md data-checked:bg-white data-checked:shadow-md text-gray-500 data-checked:text-black"*/}
                           {/*   radioControlClassName="hidden"*/}
                           {/*   radioLabelClassName="font-semibold flex-none flex"*/}
                           {/*   radioHelpClassName="text-base"*/}
                           {/*   value={variation.type}*/}
                           {/*   onChange={v => editVariation(variation.id, 'type', v)}*/}
                           {/*   options={[{ value: 'single', label: 'One selection' }, { value: 'multiple', label: 'Multiple selections' }]}*/}
                           {/*/>*/}
                           <Switch
                              name="available"
                              label="Available"
                              defaultChecked={variation.available}
                              onChange={v => typeof v === 'boolean' && editVariation(variation.id, 'available', v)}
                              fieldClassName="!w-[fit-content] mt-2"
                           />
                        </div>
                        <IconButton
                           icon={<BiTrash />} intent="alert-basic" className="mt-9" size="sm" onClick={(e) => {
                           e.preventDefault()
                           removeVariation(variation.id)
                        }}
                        />
                     
                     </div>
                     
                     <div className="mt-2 flex gap-2 p-4">
                        <div className="flex flex-col gap-2 w-full">
                           {variation.options?.map((option: ItemVariationOption, i) => {
                              return <div key={option.id} className="flex bg-gray-50 rounded-md p-2 w-full gap-2 items-center relative">
                                 <div className="w-full">
                                    <TextInput
                                       value={option.value} onChange={(e) => {
                                       e.preventDefault()
                                       editOption(variation.id, option.id, 'value', e.target.value ?? '')
                                    }} placeholder="Value"
                                       className="w-full mr-10"
                                    />
                                    <div className="flex items-center mt-3 gap-4">
                                       <PriceInput
                                          leftAddon="+"
                                          value={option.price}
                                          onChange={v => editOption(variation.id, option.id, 'price', v)}
                                       />
                                       <Switch
                                          name="available"
                                          label="Available"
                                          defaultChecked={option.available}
                                          onChange={v => typeof v === 'boolean' && editOption(variation.id, option.id, 'available', v)}
                                          fieldClassName="!w-[fit-content]"
                                       />
                                    </div>
                                 </div>
                                 <IconButton
                                    icon={<BiTrash />} intent="alert-basic" size="sm"
                                    className="absolute top-3 right-2"
                                    onClick={(e) => {
                                       e.preventDefault()
                                       removeOption(variation.id, option.id)
                                    }}
                                 />
                              </div>
                           })}
                           <IconButton
                              icon={<IoMdAddCircle />} intent="primary-outline" size="sm" onClick={(e) => {
                              e.preventDefault()
                              addOption(variation.id)
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
                  setVariations(prev => [...prev, { id: `variation_` + crypto.randomUUID(), name: "", options: [], type: 'single', available: true }])
               }}
               leftIcon={<BiPlus />}
               intent="primary-outline"
               size="md"
               contentWidth
            >
               Add a variation
            </Button>
         </div>
      </>
   )
   
})

export function sanitizeOptionField(options: ItemChoice[]) {
   return options?.filter((v: any) => v.name !== '')?.map((o: any) => ({
      ...o, options: o.options?.filter((a: any) => a.value !== ''),
   }))
}
