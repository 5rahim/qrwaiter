import AtomPreloader from '@/atoms/preloaders/AtomPreloader'
import { getRestaurantBySlug } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Layout({ children, params: { lng, slug } }: { children: React.ReactNode, params: { lng: string, slug: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantBySlug(slug)
   
   if (!restaurant) {
      redirect(siteLinkTo(s => s.main.home))
   }
   
   return (
      <div>
         {children}
         <AtomPreloader restaurant={restaurant} />
      </div>
   )
}
