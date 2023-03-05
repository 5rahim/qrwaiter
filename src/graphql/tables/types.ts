import { DB_GetTableInfoQuery, DB_GetTableQuery, DB_GetTablesQuery } from '@/graphql/generated'

export type Tables = DB_GetTablesQuery['tables']
export type TableInfo = DB_GetTableInfoQuery['tables_by_pk']

/**
 * Contains: Table_Orders -> Orders
 */
export type Table = DB_GetTableQuery['tables_by_pk']
