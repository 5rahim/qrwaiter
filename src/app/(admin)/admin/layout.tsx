import AdminNav from '@/app/(admin)/admin/(dashboard-layout)/AdminNav'
import { AdminProfileDropdown } from '@/app/(admin)/admin/(dashboard-layout)/AdminProfileDropdown'
import { OpenAdminNavButton } from '@/app/(admin)/admin/(dashboard-layout)/OpenAdminNavButton'
import AtomPreloader from '@/atoms/preloaders/AtomPreloader'
import { getRestaurantByAdministratorId, getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal'
import LinkButton from '@ui/main/forms/button/LinkButton'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Layout({ children }: { children: React.ReactNode }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const [restaurantByOwner, restaurantByAdministrator] = await Promise.all([
      getRestaurantByOwnerId(sessionUser?.id),
      getRestaurantByAdministratorId(sessionUser?.id),
   ])
   
   if (!restaurantByOwner && !restaurantByAdministrator) {
      redirect(siteLinkTo(s => s.main.new))
   }
   
   const restaurant = (restaurantByOwner ?? restaurantByAdministrator)!
   
   return (
      <>
         <AtomPreloader restaurant={restaurant} />
         <div>
            <AdminNav />
            <div className="flex flex-1 flex-col md:pl-64">
               <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                  <OpenAdminNavButton />
                  <div className="flex flex-1 justify-between px-4">
                     <div className="flex flex-1 items-center">
                        <LinkButton to={siteLinkTo(s => s.main.home)} rightIcon={<BiLinkExternal />} intent="primary-basic">See the live
                                                                                                                            menu</LinkButton>
                        {/*<form className="flex w-full md:ml-0" action="#" method="GET">*/}
                        {/*   <label htmlFor="search-field" className="sr-only">*/}
                        {/*      Search*/}
                        {/*   </label>*/}
                        {/*   <div className="relative w-full text-gray-400 focus-within:text-gray-600">*/}
                        {/*      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">*/}
                        {/*         <BiSearch className="h-5 w-5" aria-hidden="true" />*/}
                        {/*      </div>*/}
                        {/*      <input*/}
                        {/*         id="search-field"*/}
                        {/*         className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"*/}
                        {/*         placeholder="Search"*/}
                        {/*         type="search"*/}
                        {/*         name="search"*/}
                        {/*      />*/}
                        {/*   </div>*/}
                        {/*</form>*/}
                     </div>
                     <div className="ml-4 flex items-center md:ml-6">
                        
                        {/* Profile dropdown */}
                        <AdminProfileDropdown />
                     </div>
                  </div>
               </div>
               
               {children}
            </div>
         </div>
      </>
   )
}
