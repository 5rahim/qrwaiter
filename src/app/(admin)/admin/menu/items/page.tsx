import MenuNavbar from '@/app/(admin)/admin/(dashboard-layout)/MenuNavbar'
import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import ItemList from '@/app/(admin)/admin/menu/items/ItemList'
import { getRestaurantInAdmin } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import React from 'react'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantInAdmin(sessionUser?.id)
   
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
            <ItemList rid={restaurant?.id} />
         </DashboardShell>
      </>
   )
}
