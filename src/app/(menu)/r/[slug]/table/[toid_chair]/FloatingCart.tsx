'use client'

import { ItemPanel } from '@/app/(menu)/r/[slug]/table/[toid_chair]/ItemPanel'
import { calculateItemPrice, CartItem, useOrderCart } from '@/atoms/cart.atom'
import { useCurrentChair, useCurrentTableOrder } from '@/atoms/table-order.atom'
import { useUpdateCurrentTableOrderMutation } from '@/graphql/generated'
import { useCurrentTableOrderSubscription } from '@/graphql/services/table-order.client'
import { useQueryClient } from '@/graphql/use-query-client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { usePriceFormatter } from '@/hooks/use-price-formatter'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { Dialog, Transition } from '@headlessui/react'
import { BiBasket } from '@react-icons/all-files/bi/BiBasket'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { Button } from '@ui/main/forms/button/Button'
import { Divider } from '@ui/main/layout/divider/Divider'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import Image from 'next/image'
import React, { Fragment } from 'react'

interface FloatingCartProps {
   children?: React.ReactNode
}

export const FloatingCart: React.FC<FloatingCartProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const modal = useDisclosure(false)
   const priceFormatter = usePriceFormatter()
   const { tableOrder } = useCurrentTableOrderSubscription()
   const { chair } = useCurrentChair()
   const queryClient = useQueryClient()
   
   const confirmDisclosure = useDisclosure(false)
   
   const { getItems, getItem, getItemPrice, getItemCount, getSubtotal, canOrder } = useOrderCart()
   
   const updateTableOrder = useUpdateCurrentTableOrderMutation(queryClient.get(), {
      onSuccess: () => {
         queryClient.successAlert()
      }
   })
   
   /**
    * In future versions whenever the cart is updated locally, we push the updates in the database
    */
   
   return (
      <>
         <Transition.Root show={!modal.isOpen} as={Fragment}>
            <Transition.Child
               as={Fragment}
               enter="ease-in-out duration-150"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in-out duration-150"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed bottom-8 left-0 right-0 px-4 z-20 w-full">
                  <div
                     className="max-w-3xl h-16 rounded-full bg-black text-white flex items-center p-2 shadow-xl justify-center mx-auto cursor-pointer"
                     onClick={modal.toggle}
                  >
                     <BiBasket className="text-lg mr-2" /> {getItemCount()} items · {priceFormatter.toFormat(getSubtotal())}
                  </div>
               </div>
            </Transition.Child>
         </Transition.Root>
         
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
                                          Your items
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
                                    
                                    <ShowOnly when={tableOrder?.status === 'confirmed' || tableOrder?.status === 'preparing' || tableOrder?.status === 'ready'}>
                                       <div className="flex mt-6 p-4 rounded-md bg-gray-50">
                                          {<div className="h-24 w-24 mr-4 flex-none rounded-md object-cover object-center relative overflow-hidden animate-bounce">
                                             <Image
                                                src={'/assets/images/frying-pan.png'}
                                                alt={""}
                                                fill
                                                quality={100}
                                                priority
                                                sizes="10rem"
                                                className="object-cover object-center"
                                             />
                                          </div>}
                                          <div>
                                             <h2 className="text-lg font-semibold">Preparing your order...</h2>
                                             {tableOrder?.status === 'confirmed' && <p className="text-md">The restaurant has received your order.</p>}
                                             {(tableOrder?.status === 'preparing') && <p className="text-md">The restaurant is working on your order.</p>}
                                             {(tableOrder?.status === 'ready') && <p className="text-md">Your order is ready.</p>}
                                          </div>
                                       </div>
                                    </ShowOnly>
                                    
                                    <div className="mt-4 space-y-4">
                                       {getItems().map(cartItem => {
                                          const item = getItem(cartItem.item.id)?.item
                                          if (!item) return null
                                          return (
                                             <Item key={item.id} item={item} />
                                          )
                                       })}
                                       <Divider />
                                       
                                       <div className="text-lg font-semibold flex justify-between"><span>Subtotal</span>
                                          <span>{priceFormatter.toFormat(getSubtotal())}</span></div>
                                       
                                       <Divider />
                                       
                                       <div>
                                          <p className="text-center font-semibold text-lg mb-2 underline">Group order</p>
                                          <ShowOnly when={(tableOrder?.orders.filter(o => o.chair_number !== chair?.chairNo) ?? []).length === 0}>
                                             <p className="text-center text-gray-700">You are the only one ordering</p>
                                          </ShowOnly>
                                          {tableOrder?.orders.filter(o => o.chair_number !== chair?.chairNo).map(order => (
                                             <div key={order.id}>
                                                <p className="font-medium p-1 border-b flex justify-between">
                                                   <span>
                                                      Chair {order.chair_number}
                                                   </span>
                                                   <span>
                                                      {priceFormatter.toFormat((order.items as CartItem[]).reduce((b, y) => b + calculateItemPrice(y.item, y.selection), 0))}
                                                   </span>
                                                </p>
                                                {order.items.map((i: any) => {
                                                   let item = i.item
                                                   return (
                                                      <div key={item.id + order.id} className="py-2 sm:flex" onClick={modal.open}>
                                                         <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                                                            <div
                                                               className={cn("h-14 w-14 flex-none rounded-md object-cover object-center sm:h-24 sm:w-24 relative overflow-hidden")}
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
                                                                  className={cn("text-md font-medium text-gray-900")}
                                                               >
                                                                  <p>{item.name}</p>
                                                               </h3>
                                                               <p className="mt-1 text-sm text-gray-900">{priceFormatter.toFormat(calculateItemPrice(item, i.selection))}</p>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   )
                                                })}
                                             </div>
                                          ))}
                                       </div>
                                       
                                       
                                       <div className="text-xl font-semibold flex justify-between bg-gray-50 py-3 border-t border-b">
                                          <span>Total</span>
                                          {/*<span>{priceFormatter.toFormat(getSubtotal())}</span>*/}
                                          <span>{priceFormatter.toFormat(tableOrder?.orders.reduce((n, v) => {
                                             return n + (v.items as CartItem[]).reduce((b, y) => b + calculateItemPrice(y.item, y.selection), 0)
                                          }, 0))}</span>
                                       </div>
                                       
                                       <ShowOnly when={canOrder}>
                                          <div>
                                             <Button
                                                className="w-full"
                                                intent="black"
                                                size="lg"
                                                onClick={confirmDisclosure.toggle}
                                             >{confirmDisclosure.isOpen ? `Close` : `Done ordering?`}</Button>
                                             <p className="text-center mt-1 text-gray-700">Make sure your group finished ordering</p>
                                          </div>
                                          
                                          <Transition.Root show={confirmDisclosure.isOpen} as={Fragment}>
                                             <Transition.Child
                                                as="div"
                                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                                enterFrom="hidden opacity-0"
                                                enterTo="block opacity-100"
                                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                                leaveFrom="block opacity-100"
                                                leaveTo="hidden opacity-0"
                                                className="p-4 rounded-md bg-gray-50 border"
                                             >
                                                <p className="mb-2 text-gray-900 font-medium">By confirming your order, the restaurant staff will
                                                                                              receive everyone's order at your table and you won't be
                                                                                              able to edit it.</p>
                                                <Button
                                                   className="w-full"
                                                   intent="primary"
                                                   size="lg"
                                                   isLoading={updateTableOrder.isLoading}
                                                   onClick={() => {
                                                      updateTableOrder.mutate({
                                                         id: tableOrder?.id,
                                                         set: {
                                                            status: 'confirmed',
                                                         },
                                                      })
                                                   }}
                                                >Confirm table order</Button>
                                             </Transition.Child>
                                          </Transition.Root>
                                       </ShowOnly>
                                    
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


interface ItemProps {
   children?: React.ReactNode
   item: any
}

const Item: React.FC<ItemProps> = (props) => {
   
   const { children, item, ...rest } = props
   const priceFormatter = usePriceFormatter()
   const { getItems, getItem, getItemPrice } = useOrderCart()
   const modal = useDisclosure(false)
   
   return <>
      <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8 items-center cursor-pointer" onClick={modal.open}>
         <div
            className={cn(
               "h-16 w-16 flex-none rounded-md object-cover object-center relative overflow-hidden",
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
                  "text-md font-medium text-gray-900",
               )}
            >
               <p>{item.name}</p>
            </h3>
            <p className="truncate text-sm text-gray-500">
               <span>Summary here</span>
            </p>
            <p className="text-gray-800 font-medium">{priceFormatter.toFormat(getItemPrice(item.id))}</p>
         </div>
      </div>
      
      <ItemPanel isOpen={modal.isOpen} close={modal.close} item={item} />
   
   </>
   
}
