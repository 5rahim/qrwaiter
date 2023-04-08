import DashboardShell from '@/app/(admin)/admin/DashboardShell'
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
            title="Order"
         >
         
         
         </DashboardShell>
      </>
   )
}
