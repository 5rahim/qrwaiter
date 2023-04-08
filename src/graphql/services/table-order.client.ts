import {
   DB_SubscribeTableOrdersSubscription, DB_SubscribeTableOrdersSubscriptionVariables, useCreateTableOrderMutation,
   useGetLatestTableOrderByTableIdQuery, useGetTableOrderQuery, useGetTableOrdersQuery,
} from '@/graphql/generated'
import { TableOrder, TableOrders } from '@/graphql/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { useSubscriptionQuery } from '@/graphql/use-subscription-query'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { gql } from 'graphql-request'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const generateOrderNumber = (pr = "UB775", su = "HK") => {
   for (let i = 0; i < 6; i++) pr += ~~(Math.random() * 10)
   return pr + su
}

export type TableOrderToken = { chair_number: number, token: string }

export const useCreateTableOrderService = (onComplete?: (tableOrderId: string | undefined) => void) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const [tableId, setTableId] = useState('')
   const [chairNo, setChairNo] = useState(0)
   
   const latestTableOrderRes = useGetLatestTableOrderByTableIdQuery(queryClient.get(), { table_id: tableId }, {
      refetchOnMount: 'always', refetchInterval: 60000, enabled: tableId.length > 0,
   })
   const latestTableOrder = latestTableOrderRes.data?.table_orders[0] ?? null
   
   const createTableOrderMutation = useCreateTableOrderMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert()
         if (onComplete) {
            onComplete(data.insert_table_orders_one?.id)
         }
      },
   })
   useMutationService(createTableOrderMutation)
   
   const createTableOrderSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      table_id: z.string().min(2).optional(),
   }))
   
   const createTableOrder = (data: InferType<typeof createTableOrderSchema>) => {
      
      if (!latestTableOrder || latestTableOrder.status === 'completed') {
         
         const tokens: TableOrderToken[] = []
         for (let i = 0; i < chairNo; i++) {
            tokens.push({ chair_number: i + 1, token: uuid() })
         }
         
         createTableOrderMutation.mutate({
            status: 'ordering',
            table_id: tableId,
            order_number: generateOrderNumber('#', ''),
            tokens,
         })
         
      } else {
         
         queryClient.errorAlert('A table order is already active for this table')
         
         if (onComplete) {
            onComplete(latestTableOrder?.id)
         }
         
      }
      
      
      // if (!tableRes.isLoading && tableRes.data) {
      //    const noOfChairs = tableRes.data.tables_by_pk?.no_of_chairs ?? 0
      //
      //
      //    // createTableOrderMutation.mutate({
      //    //    status: 'ordering',
      //    //    table_id: data.table_id,
      //    //    tokens,
      //    // })
      // }
      
   }
   
   return {
      tableId,
      chairNo,
      createTableOrder,
      createTableOrderSchema,
      setTableId,
      setChairNo,
   }
   
}


export const useTableOrder = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetTableOrderQuery(queryClient.get(), { id }, { refetchOnMount: 'always' })
   
   const tableOrder: TableOrder = res.data?.table_orders_by_pk
   
   return {
      tableOrder,
      tableOrderLoading: res.isLoading,
   }
   
}


export const useTableOrders = (restaurantId: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetTableOrdersQuery(queryClient.get(), { restaurant_id: restaurantId }, { refetchOnMount: 'always' })
   
   const tableOrders: TableOrders = res.data?.table_orders ?? []
   
   return {
      tableOrders,
      tableOrdersLoading: res.isLoading,
   }
   
}

export const useTableOrdersSubscription = (restaurantId: Nullable<string>) => {

    const res = useSubscriptionQuery<DB_SubscribeTableOrdersSubscription, DB_SubscribeTableOrdersSubscriptionVariables>(gql`

      subscription SubscribeTableOrders($restaurant_id: uuid!) {
        table_orders(order_by: {created_at: desc}, where: {table: {restaurant_id: {_eq: $restaurant_id}}}) {
          id
          created_at
          status
          tokens
          table_id
          order_number
          table {
            name
          }
        }
      }
    `, { restaurant_id: restaurantId })
   
   const tableOrders: TableOrders = res.data?.table_orders ?? []
   
   return {
      tableOrders,
      tableOrdersLoading: res.isLoading,
   }

}
