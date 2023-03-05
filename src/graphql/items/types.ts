import { DB_GetItemQuery, DB_GetItemsQuery } from '@/graphql/generated'

export type Items = DB_GetItemsQuery['items']

export type Item = DB_GetItemQuery['items_by_pk']
