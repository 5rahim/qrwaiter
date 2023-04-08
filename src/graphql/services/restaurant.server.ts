import { GetRestaurantByAdministratorId, GetRestaurantByOwnerId, GetRestaurantBySlug } from '@/graphql/actions/restaurants'
import {
   DB_GetRestaurantByAdministratorIdQuery, DB_GetRestaurantByAdministratorIdQueryVariables, DB_GetRestaurantByOwnerIdQuery,
   DB_GetRestaurantByOwnerIdQueryVariables, DB_GetRestaurantBySlugQuery, DB_GetRestaurantBySlugQueryVariables,
} from '@/graphql/generated'
import { Restaurant } from '@/graphql/types'
import { useServerQuery } from '@/graphql/use-server-query'
import { Nullable } from '@/types'
import { siteLinkTo } from '@/utils/links'
import { redirect } from 'next/navigation'
import { cache } from "react"

export const getRestaurantInAdmin = cache(async (userId: Nullable<string>) => {
   const [restaurantByOwner, restaurantByAdministrator] = await Promise.all([
      getRestaurantByOwnerId(userId),
      getRestaurantByAdministratorId(userId),
   ])
   
   if (!restaurantByOwner && !restaurantByAdministrator) {
      redirect(siteLinkTo(s => s.main.new))
   }
   
   return (restaurantByOwner ?? restaurantByAdministrator)!
})

export const getRestaurantByOwnerId = cache(async (ownerId: Nullable<string>): Promise<Restaurant | null> => {
   
   if (ownerId) {
      const res = await useServerQuery<DB_GetRestaurantByOwnerIdQuery, DB_GetRestaurantByOwnerIdQueryVariables>(GetRestaurantByOwnerId, { owner_id: ownerId })
      return res?.restaurants[0] ?? null
   }
   
   return null
   
})

export const getRestaurantByAdministratorId = cache(async (userId: Nullable<string>): Promise<Restaurant | null> => {
   
   if (userId) {
      const res = await useServerQuery<DB_GetRestaurantByAdministratorIdQuery, DB_GetRestaurantByAdministratorIdQueryVariables>(GetRestaurantByAdministratorId, { user_id: userId })
      return res?.restaurant_administrators[0]?.restaurant ?? null
   }
   
   return null
   
})


export const getRestaurantBySlug = cache(async (slug: Nullable<string>): Promise<Restaurant | null> => {
   
   if (slug) {
      const res = await useServerQuery<DB_GetRestaurantBySlugQuery, DB_GetRestaurantBySlugQueryVariables>(GetRestaurantBySlug, { slug })
      return res?.restaurants[0] ?? null
   }
   
   return null
   
})
