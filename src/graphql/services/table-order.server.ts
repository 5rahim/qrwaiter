import {
   DB_GetLatestTableOrderByTableIdQuery, DB_GetLatestTableOrderByTableIdQueryVariables, DB_GetTableOrderInfoQuery, DB_GetTableOrderInfoQueryVariables,
} from '@/graphql/generated'
import { useServerQuery } from '@/graphql/use-server-query'
import { Nullable } from '@/types'
import { gql } from 'graphql-request'
import { cache } from 'react'

export type CurrentTableOrder = DB_GetLatestTableOrderByTableIdQuery['table_orders'][number]

export const getTableOrder = cache(async (id: Nullable<string>): Promise<CurrentTableOrder | null> => {

    if (id) {
        const res = await useServerQuery<DB_GetTableOrderInfoQuery, DB_GetTableOrderInfoQueryVariables>(gql`query GetTableOrderInfo($id: uuid!) {
          table_orders(limit: 1, order_by: {created_at: desc}, where: {id: {_eq: $id}}) {
            id
            created_at
            status
            tokens
            order_number
            table_id
            table {
              id
              no_of_chairs
              restaurant_id
              name
              order
            }
            orders {
              chair_number
              created_at
              id
              items
              subtotal
              table_order_id
              total
              total_tax
            }
          }
        }`, { id: id })
       return res?.table_orders[0] ?? null
    }
   
   return null

})
