'use client'

import { ItemPanel } from '@/app/(menu)/r/[slug]/table/[toid_chair]/ItemPanel'
import { useOrderCart } from '@/atoms/cart.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { usePriceFormatter } from '@/hooks/use-price-formatter'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { Dialog, Transition } from '@headlessui/react'
import { BiBasket } from '@react-icons/all-files/bi/BiBasket'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { Divider } from '@ui/main/layout/divider/Divider'
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
   
   const { getItems, getItem, getItemPrice, getItemCount, getSubtotal } = useOrderCart()
   
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
                                          Cart
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
                                    
                                    <div className="mt-4 space-y-4 pb-[8rem]">
                                       {getItems().map(cartItem => {
                                          const item = getItem(cartItem.item.id)?.item
                                          if (!item) return null
                                          return (
                                             <Item key={item.id} item={item} />
                                          )
                                       })}
                                       <Divider />
                                       
                                       <div className="text-lg font-semibold flex justify-between"><span>Subtotal</span> <span>{priceFormatter.toFormat(getSubtotal())}</span></div>
                                       
                                       <Divider />
                                       
                                       <p>/* Show other group's cart here */</p>
                                       
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
