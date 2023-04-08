import { DB_GetLatestTableOrderByTableIdQuery, DB_GetLatestTableOrderByTableIdQueryVariables } from '@/graphql/generated'
import { useServerQuery } from '@/graphql/use-server-query'
import { Nullable } from '@/types'
import { gql } from 'graphql-request'
import { cache } from 'react'

export type CurrentTableOrder = DB_GetLatestTableOrderByTableIdQuery['table_orders'][number]

export const getLatestTableOrderByTableId = cache(async (tableId: Nullable<string>): Promise<CurrentTableOrder | null> => {

    if (tableId) {
        const res = await useServerQuery<DB_GetLatestTableOrderByTableIdQuery, DB_GetLatestTableOrderByTableIdQueryVariables>(gql`query GetLatestTableOrder($table_id: uuid!) {
          table_orders(limit: 1, order_by: {created_at: desc}, where: {table_id: {_eq: $table_id}}) {
            id
            created_at
            status
            tokens
            table_id
            table {
              no_of_chairs
              name
            }
          }
        }`, { table_id: tableId })
       return res?.table_orders[0] ?? null
    }
   
   return null

})
