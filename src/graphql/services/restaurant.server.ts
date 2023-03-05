import { DB_GetRestaurantBySlugQuery, DB_GetRestaurantBySlugQueryVariables } from '@/graphql/generated'
import { GetRestaurantBySlug } from '@/graphql/restaurants/actions'
import { Restaurant } from '@/graphql/restaurants/types'
import { useServerQuery } from '@/graphql/use-server-query'
import { Nullable } from '@/types'
import { cache } from "react"

export const getRestaurant = cache(async (slug: Nullable<string>): Promise<Restaurant | null> => {
   
   if (slug) {
      const res = await useServerQuery<DB_GetRestaurantBySlugQuery, DB_GetRestaurantBySlugQueryVariables>(GetRestaurantBySlug, { slug })
      return res?.restaurants[0] ?? null
   }
   
   return null
   
})
