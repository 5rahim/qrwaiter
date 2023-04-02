import AtomPreloader from '@/atoms/preloaders/AtomPreloader'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Layout({ children }: { children: React.ReactNode }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   if (!restaurant) {
      redirect(siteLinkTo(s => s.main.new))
   }
   
   
   return (
      <>
         <AtomPreloader restaurant={restaurant} />
         <div className="min-h-full">
            {children}
         </div>
      </>
   )
}
