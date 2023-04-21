'use client'

import { formatItemSelectionDefaultValues, ItemSelection } from '@/app/(menu)/r/[slug]/table/[toid_chair]/TableItemList'
import { CartItem, useOrderCart } from '@/atoms/cart.atom'
import { HomePageCategories, Item, ItemChoice, ItemVariation } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { usePriceFormatter } from '@/hooks/use-price-formatter'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { _selectObjectById } from '@/utils/arrays'
import { Dialog, Transition } from '@headlessui/react'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { Button } from '@ui/main/forms/button/Button'
import { CheckboxGroup } from '@ui/main/forms/checkbox/CheckboxGroup'
import { RadioGroup } from '@ui/main/forms/radio/RadioGroup'
import { DividerWithLabel } from '@ui/main/layout/divider/DividerWithLabel'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import _ from 'lodash'
import Image from 'next/image'
import React, { Fragment, useEffect, useMemo, useState } from 'react'

interface ItemPanelProps {
   children?: React.ReactNode
    isOpen: boolean
    close: () => void
    item: HomePageCategories[number]['items'][number]
}

export const ItemPanel: React.FC<ItemPanelProps> = (props) => {
   
   const { children, item, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const priceFormatter = usePriceFormatter()
    
    const [selection, setSelection] = useState<ItemSelection>(formatItemSelectionDefaultValues(item) as ItemSelection)
    
    const { getItems, getItem, addItem, removeItem, getItemPrice } = useOrderCart((cart) => {
        if (!!_selectObjectById<CartItem>(item.id)(cart)?.selection) {
            setSelection(_selectObjectById<CartItem>(item.id)(cart)!.selection)
        }
    })
    
    const selectionsDiffer = useMemo(() => {
        return !_.isEqual(selection, getItem(item.id)?.selection)
    }, [getItems(), selection])
    
    
    useEffect(() => {
        if (getItem(item.id)?.selection) {
            setSelection(getItem(item.id)!.selection)
        }
    }, [getItems()])
    
    const handleChangeSelection = (type: 'choices' | 'variations', id: string, selected: string[]) => {
        setSelection(prev => {
            let target = _.find(selection[type], n => n.id === id)
            if (target) {
                const arr = {
                    ...prev,
                    [type]: prev[type].map(n => {
                        if (n.id === id) {
                            return { ...n, selected }
                        }
                    }) as any,
                }
                return arr
            }
            return prev
        })
    }
   
   return (
      <>
          <Transition.Root show={props.isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={props.close}>
                  <div className="fixed inset-0" />
                  
                  <div className="fixed inset-0 overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden">
                          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-14 sm:pl-16">
                              <Transition.Child
                                 as={Fragment}
                                 enter="transform transition ease-in-out duration-500 sm:duration-700"
                                 enterFrom="translate-x-full"
                                 enterTo="translate-x-0"
                                 leave="transform transition ease-in-out duration-500 sm:duration-700"
                                 leaveFrom="translate-x-0"
                                 leaveTo="translate-x-full"
                              >
                                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                          <div className="px-4 py-6 sm:px-6">
                                              <div className="flex items-start justify-between">
                                                  <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                                                      {item.name}
                                                  </h2>
                                                  <div className="ml-3 flex h-7 items-center">
                                                      <button
                                                         type="button"
                                                         className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-brand-500"
                                                         onClick={() => props.close()}
                                                      >
                                                          <span className="sr-only">Close panel</span>
                                                          <BiX className="h-8 w-8" aria-hidden="true" />
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* Main */}
                                          <div className="pb-[8rem]">
                                              <div className="pb-1 sm:pb-6">
                                                  <div>
                                                      <div className="relative h-56 sm:h-56">
                                                          <Image
                                                             src={item.images.main}
                                                             alt={""}
                                                             fill
                                                             quality={100}
                                                             priority
                                                             sizes="20rem"
                                                             className="object-cover object-center"
                                                          />
                                                      </div>
                                                      {/*TODO: Show all images */}
                                                      <div className="mt-6 px-4 sm:mt-8 sm:items-end sm:px-6 space-y-4">
                                                          <div className="sm:flex-1">
                                                              <div>
                                                                  <div className="flex items-center">
                                                                      <ShowOnly when={!!getItem(item.id)}>
                                                                         <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{priceFormatter.toFormat(getItemPrice(item.id))}</h3>
                                                                      </ShowOnly>
                                                                      <ShowOnly when={!getItem(item.id)}>
                                                                         <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{priceFormatter.toFormat(item.price)}</h3>
                                                                      </ShowOnly>
                                                                      <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                                                          <span className="sr-only">Online</span>
                                                                      </span>
                                                                  </div>
                                                                  <p className="text-sm text-gray-500">{item.description}</p>
                                                                  
                                                                  {/*Show allergens*/}
                                                                  <ShowOnly when={item.allergens.length && item.allergens.length > 0}>
                                                                      <p className="mt-2">Allergens: <span className="font-medium">{item.allergens.map((o: string) => _.capitalize(o)).join(', ')}</span>.
                                                                      </p>
                                                                  </ShowOnly>
                                                              
                                                              </div>
                                                          </div>
                                                          
                                                          <DividerWithLabel></DividerWithLabel>
                                                          
                                                          <div className="">
                                                              {(item.choices as ItemChoice[]).filter(n => n.available).map((choice, index) => {
                                                                  return <div className="space-y-1 mt-4" key={choice.id}>
                                                                      <p className="font-bold mb-2">{choice.name}
                                                                          <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                                                              <span className="sr-only">Online</span>
                                                                          </span></p>
                                                                      {choice.type === "single" && <RadioGroup
                                                                         fieldClassName="flex w-full"
                                                                         fieldLabelClassName="text-base sm:text-base md:text-base"
                                                                         stackClassName="flex flex-col gap-2"
                                                                         radioWrapperClassName="block w-full p-2 cursor-pointer transition border border-gray-200 rounded-md data-checked:bg-white data-checked:ring-2 data-checked:ring-brand-500"
                                                                         radioControlClassName="absolute right-2 top-2 h-5 w-5 text-xs"
                                                                         radioLabelClassName="font-medium flex-none flex"
                                                                         radioHelpClassName="text-sm"
                                                                         value={_.find(selection.choices, n => n.id === choice.id)!.selected[0]}
                                                                         options={choice.options.filter(n => n.available).map(option => ({
                                                                             value: option.id,
                                                                             label: option.value,
                                                                         }))}
                                                                         onChange={v => handleChangeSelection('choices', choice.id, v ? [v] : [])}
                                                                      />}
                                                                      {choice.type === "multiple" && <CheckboxGroup
                                                                         fieldClassName="flex w-full overflow-hidden"
                                                                         fieldLabelClassName="text-base sm:text-base md:text-base"
                                                                         stackClassName="flex flex-col gap-2"
                                                                         checkboxWrapperClassName="block w-full p-2 cursor-pointer transition border border-gray-200 rounded-md data-checked:bg-white data-checked:ring-2 data-checked:ring-brand-500"
                                                                         checkboxControlClassName="absolute right-2 top-2 h-5 w-5 text-xs"
                                                                         checkboxLabelClassName="font-medium flex-none flex"
                                                                         // checkboxHelpClassName="text-sm"
                                                                         defaultValues={_.find(selection.choices, n => n.id === choice.id)!.selected}
                                                                         options={choice.options.filter(n => n.available).map(option => ({
                                                                             value: option.id,
                                                                             label: option.value,
                                                                         }))}
                                                                         onChange={v => handleChangeSelection('choices', choice.id, v)}
                                                                      />}
                                                                  </div>
                                                              })}
                                                              
                                                              {(item.variations as ItemVariation[]).filter(n => n.available).map(variation => {
                                                                  return <div className="space-y-1 mt-4" key={variation.id}>
                                                                      <p className="font-bold mb-2">{variation.name}
                                                                          <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                                                              <span className="sr-only">Online</span>
                                                                          </span></p>
                                                                      {variation.type === "single" && <RadioGroup
                                                                         fieldClassName="flex w-full"
                                                                         fieldLabelClassName="text-base sm:text-base md:text-base"
                                                                         stackClassName="flex flex-col gap-2"
                                                                         radioWrapperClassName="block w-full p-2 cursor-pointer transition border border-gray-200 rounded-md data-checked:bg-white data-checked:ring-2 data-checked:ring-brand-500"
                                                                         radioControlClassName="absolute right-2 top-2 h-5 w-5 text-xs"
                                                                         radioLabelClassName="font-medium flex-none flex"
                                                                         radioHelpClassName="text-sm"
                                                                         value={_.find(selection.variations, n => n.id === variation.id)!.selected[0]}
                                                                         options={variation.options.filter(n => n.available).map(option => ({
                                                                             value: option.id,
                                                                             label: <>{option.value}{option.price > 0 && ` (+${priceFormatter.toFormat(option.price)})`}</>,
                                                                         }))}
                                                                         onChange={v => handleChangeSelection('variations', variation.id, v ? [v] : [])}
                                                                      />}
                                                                      {variation.type === "multiple" && <CheckboxGroup
                                                                         fieldClassName="flex w-full overflow-hidden"
                                                                         fieldLabelClassName="text-base sm:text-base md:text-base"
                                                                         stackClassName="flex flex-col gap-2"
                                                                         checkboxWrapperClassName="block w-full p-2 cursor-pointer transition border border-gray-200 rounded-md data-checked:bg-white data-checked:ring-2 data-checked:ring-brand-500"
                                                                         checkboxControlClassName="absolute right-2 top-2 h-5 w-5 text-xs"
                                                                         checkboxLabelClassName="font-medium flex-none flex"
                                                                         // checkboxHelpClassName="text-sm"
                                                                         defaultValues={_.find(selection.variations, n => n.id === variation.id)!.selected}
                                                                         options={variation.options.filter(n => n.available).map(option => ({
                                                                             value: option.id,
                                                                             label: <>{option.value}{option.price > 0 && ` (+${priceFormatter.toFormat(option.price)})`}</>,
                                                                         }))}
                                                                         onChange={v => handleChangeSelection('variations', variation.id, v)}
                                                                      />}
                                                                  </div>
                                                              })}
                                                          </div>
                                                          
                                                          {/*TODO: Quantity*/}
                                                          
                                                          <ShowOnly when={!getItem(item.id)}>
                                                              <Button
                                                                 onClick={() => {
                                                                     addItem(item, selection)
                                                                 }}
                                                              >Add item</Button>
                                                          </ShowOnly>
                                                          
                                                          <ShowOnly when={!!getItem(item.id)}>
                                                              <Button
                                                                 intent="primary" isDisabled={!selectionsDiffer} onClick={() => {
                                                                  addItem(item, selection)
                                                              }} className={cn(
                                                                 "mr-2",
                                                                 {
                                                                     "animate-bounce": selectionsDiffer
                                                                 }
                                                              )}
                                                              >Update item</Button>
                                                              <Button
                                                                 intent="alert-outline" onClick={() => {
                                                                  removeItem(item.id)
                                                              }}
                                                              >Remove item</Button>
                                                          </ShowOnly>
                                                      
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </Dialog.Panel>
                              </Transition.Child>
                          </div>
                      </div>
                  </div>
              </Dialog>
          </Transition.Root>
      </>
   )
   
}
