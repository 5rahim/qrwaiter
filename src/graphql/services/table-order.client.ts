import { useCreateTableOrderMutation, useGetTableInfoQuery, useGetTableOrderQuery, useGetTableOrdersQuery } from '@/graphql/generated'
import { TableOrder, TableOrders } from '@/graphql/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export type TableOrderToken = { chair_number: number, token: string }

export const useCreateTableOrderService = (tableId?: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const tableRes = useGetTableInfoQuery(queryClient.get(), { id: tableId })
   
   const createTableOrderMutation = useCreateTableOrderMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert()
      },
   })
   useMutationService(createTableOrderMutation)
   
   const createTableOrderSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      table_id: z.string().min(2),
   }))
   
   const createTableOrder = (data: InferType<typeof createTableOrderSchema>) => {
   
      if (!tableRes.isLoading && tableRes.data) {
         const noOfChairs = tableRes.data.tables_by_pk?.no_of_chairs ?? 0
      
         const tokens: TableOrderToken[] = []
      
         for (let i = 0; i < noOfChairs; i++) {
            tokens.push({ chair_number: i + 1, token: crypto.randomUUID() })
         }
      
         createTableOrderMutation.mutate({
            status: 'ordering',
            table_id: data.table_id,
            tokens,
         })
      }
   
   }
   
   return {
      createTableOrder,
      createTableOrderSchema,
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
