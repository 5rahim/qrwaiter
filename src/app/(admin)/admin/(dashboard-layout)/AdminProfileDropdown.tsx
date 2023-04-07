'use client'

import { useCurrentUser } from '@/atoms/user.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React, { Fragment } from 'react'

interface AdminProfileDropdownProps {
   children?: React.ReactNode
}

export const AdminProfileDropdown: React.FC<AdminProfileDropdownProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { user } = useCurrentUser()
   
   return (
      <>
         <Menu as="div" className="relative ml-3">
            <div>
               <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                     <Image
                        sizes="6rem"
                        className="object-cover"
                        src={user?.image ?? ''}
                        fill
                        alt=""
                     />
                  </div>
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
                  <Menu.Item>
                     <a
                        onClick={() => signOut()}
                        className={cn(
                           'block px-4 py-2 text-md text-gray-700',
                        )}
                     >
                        Sign out
                     </a>
                  </Menu.Item>
               </Menu.Items>
            </Transition>
         </Menu>
      </>
   )
   
}
