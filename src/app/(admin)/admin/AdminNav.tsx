'use client'

import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { useCurrentUser } from '@/atoms/user.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { siteLinkTo } from '@/utils/links'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BiBookOpen } from '@react-icons/all-files/bi/BiBookOpen'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { BiPaintRoll } from '@react-icons/all-files/bi/BiPaintRoll'
import { BiReceipt } from '@react-icons/all-files/bi/BiReceipt'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { GiRoundTable } from '@react-icons/all-files/gi/GiRoundTable'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { Fragment, useMemo } from 'react'

interface AdminNavProps {
   children?: React.ReactNode
}

const AdminNav: React.FC<AdminNavProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const pathname = usePathname()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   const { user } = useCurrentUser()
   
   const navigation = useMemo(() => [
      { name: 'Orders', href: siteLinkTo(s => s.admin.home), icon: BiReceipt, current: links.awarePathIsSelected(links.to(s => s.admin.home)) },
      {
         name: 'Menu', href: siteLinkTo(s => s.admin.items), icon: BiBookOpen,
         current: pathname?.includes(links.to(s => s.admin.items)) || pathname?.includes(links.to(s => s.admin.categories)),
      },
      {
         name: 'Tables', href: siteLinkTo(s => s.admin.tables), icon: GiRoundTable, current: links.awarePathIsSelected(links.to(s => s.admin.tables)),
      },
      {
         name: 'Customization', href: siteLinkTo(s => s.admin.customization), icon: BiPaintRoll,
         current: links.awarePathIsSelected(links.to(s => s.admin.customization)),
      },
   ], [pathname])
   
   const userNavigation = [
      { name: 'Your Profile', href: '#' },
      { name: 'Settings', href: '#' },
   ]
   
   return (
      <>
         <Disclosure as="nav" className="bg-brand-700">
            {({ open }) => (
               <>
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                     <div className="">
                        <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                           <div className="flex items-center divide-x divide-gray-600">
                              <div className="flex-shrink-0 text-lg font-semibold text-white mr-5">
                                 {restaurant?.name}
                              </div>
                              <div className="hidden md:block">
                                 <div className="ml-5 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                       <a
                                          key={item.name}
                                          href={item.href}
                                          className={cn(
                                             'px-3 py-2 rounded-md text-md font-medium',
                                             item.current
                                                ? 'bg-brand-800 text-white font-bold'
                                                : 'text-gray-300 hover:text-white',
                                          )}
                                          aria-current={item.current ? 'page' : undefined}
                                       >
                                          {item.name}
                                       </a>
                                    ))}
                                 </div>
                              </div>
                           </div>
                           <div className="hidden md:block">
                              <div className="ml-4 flex items-center md:ml-6">
                                 
                                 {/* Profile dropdown */}
                                 <Menu as="div" className="relative ml-3">
                                    <div>
                                       <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                          <span className="sr-only">Open user menu</span>
                                          <img className="h-8 w-8 rounded-full" src={user?.image ?? ''} alt="" />
                                       </Menu.Button>
                                    </div>
                                    <Transition
                                       as={Fragment}
                                       enter="transition ease-out duration-100"
                                       enterFrom="transform opacity-0 scale-95"
                                       enterTo="transform opacity-100 scale-100"
                                       leave="transition ease-in duration-75"
                                       leaveFrom="transform opacity-100 scale-100"
                                       leaveTo="transform opacity-0 scale-95"
                                    >
                                       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                          {userNavigation.map((item) => (
                                             <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                   <a
                                                      href={item.href}
                                                      className={cn(
                                                         active ? 'bg-white text-brand-800' : '',
                                                         'block px-4 py-2 text-sm text-gray-700',
                                                      )}
                                                   >
                                                      {item.name}
                                                   </a>
                                                )}
                                             </Menu.Item>
                                          ))}
                                          <Menu.Item>
                                             <button onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700">Sign out</button>
                                          </Menu.Item>
                                       </Menu.Items>
                                    </Transition>
                                 </Menu>
                              </div>
                           </div>
                           <div className="-mr-2 flex md:hidden">
                              {/* Mobile menu button */}
                              <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                 <span className="sr-only">Open main menu</span>
                                 {open ? (
                                    <BiX className="block h-6 w-6" aria-hidden="true" />
                                 ) : (
                                    <BiMenu className="block h-6 w-6" aria-hidden="true" />
                                 )}
                              </Disclosure.Button>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                     <div className="space-y-1 px-2 py-3 sm:px-3">
                        {navigation.map((item) => (
                           <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={cn(
                                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                 'block px-3 py-2 rounded-md text-base font-medium',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                           >
                              {item.name}
                           </Disclosure.Button>
                        ))}
                     </div>
                     <div className="border-t border-gray-700 pt-4 pb-3">
                        <div className="flex items-center px-5">
                           <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={user?.image ?? ''} alt="" />
                           </div>
                           <div className="ml-3">
                              <div className="text-base font-medium leading-none text-white">{user?.name}</div>
                              <div className="text-sm font-medium leading-none text-gray-400">{user?.email}</div>
                           </div>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                           {userNavigation.map((item) => (
                              <Disclosure.Button
                                 key={item.name}
                                 as="a"
                                 href={item.href}
                                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                              >
                                 {item.name}
                              </Disclosure.Button>
                           ))}
                        </div>
                     </div>
                  </Disclosure.Panel>
               </>
            )}
         </Disclosure>
      </>
   )
   
}

export default AdminNav
