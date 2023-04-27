'use client'

import { calculateItemPrice, CartItem, getItemChoices } from '@/atoms/cart.atom'
import { useUpdateCurrentTableOrderMutation } from '@/graphql/generated'
import { useTableOrderSubscription } from '@/graphql/services/table-order.client'
import { useQueryClient } from '@/graphql/use-query-client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { usePriceFormatter } from '@/hooks/use-price-formatter'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { BiFoodTag } from '@react-icons/all-files/bi/BiFoodTag'
import { Select } from '@ui/main/forms/select/Select'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import _ from 'lodash'
import Image from 'next/image'
import React from 'react'

interface TableOrderManagementProps {
   children?: React.ReactNode
   id: string
}

export const TableOrderManagement: React.FC<TableOrderManagementProps> = (props) => {
   
   const { children, id, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const queryClient = useQueryClient()
   const priceFormatter = usePriceFormatter()
   
   const { tableOrder, tableOrderLoading } = useTableOrderSubscription(id)
   
   const updateTableOrder = useUpdateCurrentTableOrderMutation(queryClient.get(), {
      onSuccess: () => {
         queryClient.successAlert()
      }
   })
   
   return (
      <div className="space-y-4">
         <div>
            {!tableOrderLoading && <Select
               options={['ordering', 'confirmed', 'preparing', 'ready', 'complete'].map(o => ({ value: o, label: _.capitalize(o) }))}
               isDisabled={tableOrder?.status === 'complete'}
               value={tableOrder?.status}
               label="Change the status of the order"
               size="lg"
               intent="basic"
               leftIcon={<BiFoodTag />}
               onChange={(e) => {
                  updateTableOrder.mutate({
                     id: tableOrder?.id,
                     set: {
                        status: e.target.value,
                     },
                  })
               }}
            />}
         </div>
         <div>
            {tableOrderLoading && <LoadingSpinner />}
            <ShowOnly when={(tableOrder?.orders ?? []).length > 0}>
               {tableOrder?.orders.map(order => (
                  <div key={order.id}>
                     <p className="font-medium p-1 border-b flex justify-between">
                        <span>
                           Chair {order.chair_number}
                        </span>
                        <span>
                           {priceFormatter.toFormat((order.items as CartItem[]).reduce((b, y) => b + calculateItemPrice(y.item, y.selection), 0))}
                        </span>
                     </p>
                     {order.items.map((i: CartItem) => {
                        let item = i.item
                        return (
                           <div key={item.id + order.id} className="py-2 sm:flex">
                              <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-4">
                                 <div
                                    className={cn("h-14 w-14 flex-none rounded-md object-cover object-center sm:h-16 sm:w-16 relative overflow-hidden")}
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
                                 <div className="min-w-0 flex-1 sm:pt-0">
                                    <h3
                                       className={cn("text-md font-semibold text-gray-900")}
                                    >
                                       <p>{item.name}</p>
                                    </h3>
                                    <p>{getItemChoices(i.item, i.selection).choices}</p>
                                    <p>{getItemChoices(i.item, i.selection).variations}</p>
                                    <p className="mt-1 text-sm text-gray-600">{priceFormatter.toFormat(calculateItemPrice(item, i.selection))}</p>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               ))}
            </ShowOnly>
         </div>
      </div>
   )
   
}
