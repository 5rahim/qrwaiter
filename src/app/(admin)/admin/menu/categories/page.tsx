import MenuNavbar from '@/app/(admin)/admin/(dashboard-layout)/MenuNavbar'
import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import CategoryList from '@/app/(admin)/admin/menu/categories/CategoryList'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import React from 'react'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      <>
         {/*@ts-ignore*/}
         <DashboardShell
            title="Menu"
            top={
               <div className="bg-white overflow-hidden">
                  <MenuNavbar />
               </div>
            }
         >
            <CategoryList rid={restaurant?.id} />
         </DashboardShell>
      </>
   )
}
