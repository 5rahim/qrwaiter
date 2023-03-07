import LayoutSidebar from '@/app/(admin)/admin/LayoutSidebar'
import SidebarMenu from '@/app/(admin)/admin/SidebarMenu'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { redirect } from 'next/navigation'
import React from 'react'

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}

export default async function Layout({ children }: { children: React.ReactNode }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   if (!restaurant) {
      redirect(siteLinkTo(s => s.main.new))
   }
   
   return (
      <div className="flex min-h-full">
         <LayoutSidebar />
         {/* Static sidebar for desktop */}
         <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col">
               <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4 font-bold text-white">
                  QR Waiter
               </div>
               <div className="flex flex-1 flex-col overflow-y-auto bg-gray-900">
                  <nav className="flex-1 px-4 py-4">
                     <SidebarMenu />
                  </nav>
               </div>
            </div>
         </div>
         <div className="flex w-0 flex-1 flex-col lg:pl-64">
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-gray-50">
               <button
                  type="button"
                  className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
               >
                  <span className="sr-only">Open sidebar</span>
                  <BiMenu />
               </button>
               <div className="flex flex-1 justify-between px-4">
                  <div className="flex flex-1 h-full items-center">
                     <span className="font-bold text-lg">{restaurant.name}</span>
                  </div>
                  <div className="ml-4 flex items-center lg:ml-6">
                     {/*<button*/}
                     {/*   type="button"*/}
                     {/*   className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"*/}
                     {/*>*/}
                     {/*   Create*/}
                     {/*</button>*/}
                  </div>
               </div>
            </div>
            
            <main className="flex-1">
               <div className="py-8 xl:py-8">
                  <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                     <div>
                        {children}
                     </div>
                  </div>
               </div>
            </main>
         </div>
      </div>
   )
}
