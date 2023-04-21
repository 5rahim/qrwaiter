'use client'

import { FloatingCart } from '@/app/(menu)/r/[slug]/table/[toid_chair]/FloatingCart'
import { CartItem, useOrderCart } from '@/atoms/cart.atom'
import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { useCurrentTableOrder } from '@/atoms/table-order.atom'
import { useHomePageItems } from '@/graphql/services/item.client'
import { HomePageCategories, ItemChoice, ItemVariation } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { usePriceFormatter } from '@/hooks/use-price-formatter'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { _selectObjectById } from '@/utils/arrays'
import { _isEmpty } from '@/utils/common'
import { Dialog, Transition } from '@headlessui/react'
import { BiBasket } from '@react-icons/all-files/bi/BiBasket'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { Button } from '@ui/main/forms/button/Button'
import { RadioGroup } from '@ui/main/forms/radio/RadioGroup'
import { DividerWithLabel } from '@ui/main/layout/divider/DividerWithLabel'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import _ from 'lodash'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'

interface TableItemListProps {
   children?: React.ReactNode
}

export const TableItemList: React.FC<TableItemListProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   const { tableOrder, chair } = useCurrentTableOrder()
   
   const createOrderDisclosure = useDisclosure(false)
   
   const { list, listLoading, items } = useHomePageItems(restaurant?.id)
   
   if (listLoading) return <LoadingSpinner />
   
   
   return (
      <>
         
         <FloatingCart />
         
         <div className="space-y-4 pb-24">
            <div className="text-center text-lg font-medium">
               <p>{tableOrder?.table?.name}</p>
               <p className="text-xs text-gray-500">{chair?.orderToken}</p>
            </div>
            
            {list.map((category) => (
               <section key={category.id} aria-labelledby={`${category.name}-category`}>
                  
                  <div className="max-w-xl">
                     <h1 className="text-2xl font-bold tracking-tight text-gray-900">{category.name}</h1>
                  </div>
                  
                  <div className="mt-4 flow-root divide-y divide-gray-200 border-t border-gray-200">
                     {category.items.map((item) => (
                        <Item key={item.id} item={_.find(items, n => n.id === item.id)!} />
                     ))}
                  </div>
               </section>
            ))}
         </div>
      </>
   )
   
}

export const formatItemSelectionDefaultValues = (props: HomePageCategories[number]['items'][number]) => {
   const variations: ItemVariation[] = props?.variations
   const options: ItemChoice[] = props?.choices
   return {
      variations: !_isEmpty(variations) ? [...variations.map((n) => ({ id: n.id, selected: n.options[0] ? [n.options[0].id!] : [] }))] : [],
      choices: !_isEmpty(options) ? [...options.map((n) => ({ id: n.id, selected: n.options[0] ? [n.options[0].id!] : [] }))] : [],
      quantity: 1,
   }
}

export type ItemSelection = ReturnType<typeof formatItemSelectionDefaultValues>

interface ItemProps {
   children?: React.ReactNode
   item: HomePageCategories[number]['items'][number]
}

const Item = (props: ItemProps) => {
   
   const { children, item, ...rest } = props
   
   const modal = useDisclosure(false)
   const priceFormatter = usePriceFormatter()
   
   const [selection, setSelection] = useState<ItemSelection>(formatItemSelectionDefaultValues(item) as ItemSelection)
   
   const { getItems, getItem, addItem, removeItem } = useOrderCart((cart) => {
      if (!!_selectObjectById<CartItem>(item.id)(cart)?.selection) {
         setSelection(_selectObjectById<CartItem>(item.id)(cart)!.selection)
      }
   })
   
   
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
   
   
   return <>
      <div className="py-4 sm:flex cursor-pointer" onClick={modal.open}>
         <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
            <div
               className={cn(
                  "h-24 w-24 flex-none rounded-md object-cover object-center sm:h-24 sm:w-24 relative overflow-hidden",
                  !!getItem(item.id) && 'border-4 border-brand-500',
               )}
            >
               <Image
                  src={item.images.main}
                  alt={item.description ?? ''}
                  fill
                  quality={70}
                  priority
                  sizes="96px"
                  className="object-cover object-center"
               />
            </div>
            <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
               <h3
                  className={cn(
                     "text-md font-semibold text-gray-900",
                     !!getItem(item.id) && 'text-brand-500',
                  )}
               >
                  <p>{item.name}</p>
               </h3>
               <p className="truncate text-sm text-gray-500">
                  <span>{item.description}</span>
               </p>
               <ShowOnly when={!getItem(item.id)}>
                  <p className="mt-1 font-bold text-gray-900">{priceFormatter.toFormat(item.price)}</p>
               </ShowOnly>
               <ShowOnly when={!!getItem(item.id)}>
                  <BiBasket className="text-brand-500 mt-3 text-lg" />
               </ShowOnly>
            </div>
         </div>
      </div>
      
      <Transition.Root show={modal.isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={modal.close}>
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
                                          onClick={() => modal.close()}
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
                                                   <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{priceFormatter.toFormat(item.price)}</h3>
                                                   <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                                      <span className="sr-only">Online</span>
                                                   </span>
                                                </div>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                                
                                                {/*Show allergens*/}
                                                <ShowOnly when={item.allergens.length && item.allergens.length > 0}>
                                                   <p className="mt-2">Allergens: <span className="font-medium">{item.allergens.join(', ')}</span>.</p>
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
                                                   <RadioGroup
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
                                                   />
                                                </div>
                                             })}
                                             
                                             {(item.variations as ItemVariation[]).filter(n => n.available).map(variation => {
                                                return <div className="space-y-1 mt-4" key={variation.id}>
                                                   <p className="font-bold mb-2">{variation.name}
                                                      <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                                         <span className="sr-only">Online</span>
                                                      </span></p>
                                                   <RadioGroup
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
                                                   />
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
                                                intent="primary-outline" onClick={() => {
                                                addItem(item, selection)
                                             }} className="mr-2"
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
   
}


