import AdminNav from '@/app/(admin)/admin/(dashboard-layout)/AdminNav'
import { AdminProfileDropdown } from '@/app/(admin)/admin/(dashboard-layout)/AdminProfileDropdown'
import { OpenAdminNavButton } from '@/app/(admin)/admin/(dashboard-layout)/OpenAdminNavButton'
import AtomPreloader from '@/atoms/preloaders/AtomPreloader'
import { getRestaurantInAdmin } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal'
import LinkButton from '@ui/main/forms/button/LinkButton'
import React from 'react'

export default async function Layout({ children }: { children: React.ReactNode }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantInAdmin(sessionUser?.id)
   
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
                        <LinkButton
                           to={siteLinkTo(s => s.main.menu, { key: 'slug', value: restaurant.slug })}
                           rightIcon={<BiLinkExternal />}
                           intent="primary-basic"
                        >
                           Preview the menu
                        </LinkButton>
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
