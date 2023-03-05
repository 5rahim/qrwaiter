import { DB_GetOrderQuery } from '@/graphql/generated'

export type Order = DB_GetOrderQuery['orders_by_pk']
