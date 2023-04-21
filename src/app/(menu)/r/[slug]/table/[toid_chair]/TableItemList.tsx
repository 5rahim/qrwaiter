'use client'

import { FloatingCart } from '@/app/(menu)/r/[slug]/table/[toid_chair]/FloatingCart'
import { ItemPanel } from '@/app/(menu)/r/[slug]/table/[toid_chair]/ItemPanel'
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
import { CheckboxGroup } from '@ui/main/forms/checkbox/CheckboxGroup'
import { RadioGroup } from '@ui/main/forms/radio/RadioGroup'
import { DividerWithLabel } from '@ui/main/layout/divider/DividerWithLabel'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import _ from 'lodash'
import Image from 'next/image'
import React, { Fragment, useEffect, useMemo, useState } from 'react'

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
   
   const { getItem, getItemPrice } = useOrderCart()
   
   
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
                  <div className="flex mt-2 items-center gap-2">
                     <BiBasket className="text-brand-500 text-lg" />
                     <p className="text-brand-500 font-semibold">{priceFormatter.toFormat(getItemPrice(item.id))}</p>
                  </div>
               </ShowOnly>
            </div>
         </div>
      </div>
      
      <ItemPanel isOpen={modal.isOpen} close={modal.close} item={item} />
      
      
   </>
   
}


