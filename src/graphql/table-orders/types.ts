import { DB_GetTableOrderQuery, DB_GetTableOrdersQuery } from '@/graphql/generated'

/**
 * Contains: Orders, Table
 */
export type TableOrder = DB_GetTableOrderQuery['table_orders_by_pk']

/**
 * Does not contain Orders and Table
 */
export type TableOrders = DB_GetTableOrdersQuery['table_orders']
