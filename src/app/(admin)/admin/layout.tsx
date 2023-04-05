import AtomPreloader from '@/atoms/preloaders/AtomPreloader'
import { getRestaurantByAdministratorId, getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
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
         <div className="min-h-full">
            {children}
         </div>
      </>
   )
}
