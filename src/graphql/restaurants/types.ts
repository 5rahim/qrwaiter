import { DB_GetRestaurantBySlugQuery } from '@/graphql/generated'

export type Restaurant = DB_GetRestaurantBySlugQuery['restaurants'][0]
