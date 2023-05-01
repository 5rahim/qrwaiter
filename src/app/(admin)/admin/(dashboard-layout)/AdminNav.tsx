'use client'

import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { useCurrentUser } from '@/atoms/user.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { siteLinkTo } from '@/utils/links'
import { Dialog, Transition } from '@headlessui/react'
import { BiBookOpen } from '@react-icons/all-files/bi/BiBookOpen'
import { BiChair } from '@react-icons/all-files/bi/BiChair'
import { BiDish } from '@react-icons/all-files/bi/BiDish'
import { BiX } from '@react-icons/all-files/bi/BiX'
import RawLink from '@ui/shared/links/RawLink'
import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { Fragment, useMemo } from 'react'

interface AdminNavProps {
   children?: React.ReactNode
}

export const adminSidebarOpen = withImmer(atom<boolean>(false))

const AdminNav: React.FC<AdminNavProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const pathname = usePathname()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   const { user } = useCurrentUser()
   
   const [sidebarOpen, setSidebarOpen] = useAtom(adminSidebarOpen)
   
   const navigation = useMemo(() => [
      {
         name: 'Orders', href: siteLinkTo(s => s.admin.home), icon: BiDish,
         current: links.awarePathIsSelected(links.to(s => s.admin.home)) || pathname?.includes('all-orders'),
      },
      {
         name: 'Menu', href: siteLinkTo(s => s.admin.items), icon: BiBookOpen,
         current: pathname?.includes(links.to(s => s.admin.items)) || pathname?.includes(links.to(s => s.admin.categories)),
      },
      {
         name: 'Tables', href: siteLinkTo(s => s.admin.tables), icon: BiChair, current: links.awarePathIsSelected(links.to(s => s.admin.tables)),
      },
      // {
      //    name: 'Customization', href: siteLinkTo(s => s.admin.customization), icon: BiPaintRoll,
      //    current: links.awarePathIsSelected(links.to(s => s.admin.customization)),
      // },
   ], [pathname])
   
   return (
      <>
         <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 md:hidden" onClose={() => setSidebarOpen(false)}>
               <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
               </Transition.Child>
               
               <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                     as={Fragment}
                     enter="transition ease-in-out duration-300 transform"
                     enterFrom="-translate-x-full"
                     enterTo="translate-x-0"
                     leave="transition ease-in-out duration-300 transform"
                     leaveFrom="translate-x-0"
                     leaveTo="-translate-x-full"
                  >
                     <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                        <Transition.Child
                           as={Fragment}
                           enter="ease-in-out duration-300"
                           enterFrom="opacity-0"
                           enterTo="opacity-100"
                           leave="ease-in-out duration-300"
                           leaveFrom="opacity-100"
                           leaveTo="opacity-0"
                        >
                           <div className="absolute top-0 right-0 -mr-12 pt-2">
                              <button
                                 type="button"
                                 className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                 onClick={() => setSidebarOpen(false)}
                              >
                                 <span className="sr-only">Close sidebar</span>
                                 <BiX className="h-6 w-6 text-white" aria-hidden="true" />
                              </button>
                           </div>
                        </Transition.Child>
                        <div className="flex flex-shrink-0 items-center px-4">
                           <p className="font-bold text-lg">QR Waiter</p>
                           {/*<img*/}
                           {/*   className="h-8 w-auto"*/}
                           {/*   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"*/}
                           {/*   alt="Your Company"*/}
                           {/*/>*/}
                        </div>
                        <div className="mt-5 h-0 flex-1 overflow-y-auto">
                           <nav className="space-y-1 px-2">
                              {navigation.map((item) => (
                                 <RawLink
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                       item.current
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                       'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                                    )}
                                 >
                                    <item.icon
                                       className={cn(
                                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                          'mr-4 flex-shrink-0 h-6 w-6',
                                       )}
                                       aria-hidden="true"
                                    />
                                    {item.name}
                                 </RawLink>
                              ))}
                           </nav>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
                     {/* Dummy element to force sidebar to shrink to fit close icon */}
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
         {/* Static sidebar for desktop */}
         <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
               <div className="flex flex-shrink-0 items-center px-4">
                  <div className="font-bold text-lg">
                     {<div className="h-9 w-32 flex-none rounded-md object-cover object-center relative overflow-hidden">
                        <Image
                           src={'/assets/images/logo.png'}
                           alt={""}
                           fill
                           quality={70}
                           priority
                           sizes="10rem"
                           className="object-cover object-center"
                        />
                     </div>}
                  </div>
               </div>
               <div className="mt-5 flex flex-grow flex-col">
                  <nav className="flex-1 space-y-1 px-2 pb-4">
                     {navigation.map((item) => (
                        <RawLink
                           key={item.name}
                           href={item.href}
                           className={cn(
                              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                              item.current ? 'bg-gray-100 text-brand-500 font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                           )}
                        >
                           <item.icon
                              className={cn(
                                 item.current ? 'text-brand-500' : 'text-gray-400 group-hover:text-gray-500',
                                 'mr-3 flex-shrink-0 h-6 w-6',
                              )}
                              aria-hidden="true"
                           />
                           {item.name}
                        </RawLink>
                     ))}
                  </nav>
               </div>
            </div>
         </div>
      </>
   )
   
}

export default AdminNav
