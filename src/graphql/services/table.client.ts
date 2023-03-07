import {
   DB_SubscribeTablesSubscription, DB_SubscribeTablesSubscriptionVariables, SubscribeTablesDocument, useCreateTableMutation, useDeleteTableMutation,
   useGetTableQuery, useUpdateTableMutation, useUpdateTableOrderMutation,
} from '@/graphql/generated'
import { Table, TableInfo, Tables } from '@/graphql/tables/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { useSubscriptionQuery } from '@/graphql/use-subscription-query'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'


export const useTableService = (restaurantId: Nullable<string>, role: 'create' | 'update' | 'delete', table?: TableInfo, tableCount?: number, onSuccess?: () => void) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createTableMutation = useCreateTableMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Table created')
         onSuccess && onSuccess()
      },
   })
   useMutationService(createTableMutation)
   
   const updateTableMutation = useUpdateTableMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Table modified')
         onSuccess && onSuccess()
      },
   })
   useMutationService(updateTableMutation)
   
   const deleteTableMutation = useDeleteTableMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Table deleted')
         onSuccess && onSuccess()
      },
   })
   useMutationService(deleteTableMutation)
   
   const tableSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      no_of_chairs: z.number().min(1),
      name: presets.name,
   }))
   
   const createTable = (data: InferType<typeof tableSchema>) => {
      createTableMutation.mutate({
         no_of_chairs: data.no_of_chairs,
         restaurant_id: restaurantId,
         name: data.name,
         order: tableCount ?? 0,
      })
   }
   const updateTable = (data: InferType<typeof tableSchema>) => {
      if (!table) return
      updateTableMutation.mutate({
         id: table.id,
         no_of_chairs: data.no_of_chairs,
         name: data.name,
         order: table.order,
      })
   }
   
   const tableDefaultValues: InferType<typeof tableSchema> | undefined = (table && role === 'update') ? {
      no_of_chairs: table.no_of_chairs,
      name: table.name,
   } : {
      no_of_chairs: 1,
      name: '',
   }
   
   const deleteTable = () => deleteTableMutation.mutate({ id: table?.id })
   
   return {
      mutateTable: role === 'create' ? createTable : updateTable,
      tableSchema,
      tableDefaultValues,
      deleteTable,
   }
   
}

export const useTableOrderService = () => {
   
   const queryClient = useQueryClient()
   
   const updateTableOrderMutation = useUpdateTableOrderMutation(queryClient.get(), {
      onSuccess: data => {
         // queryClient.successAlert('Table created')
      },
   })
   useMutationService(updateTableOrderMutation)
   
   return {
      updateTableOrder: updateTableOrderMutation.mutate,
   }
   
}

export const useTable = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetTableQuery(queryClient.get(), { id }, { refetchOnMount: 'always' })
   
   const table: Table = res.data?.tables_by_pk
   
   return {
      table,
      tableLoading: res.isLoading,
   }
   
}


export const useTables = (restaurantId: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   // const res = useGetTablesQuery(queryClient.get(), { restaurant_id: restaurantId }, { refetchOnMount: 'always' })
   const res = useSubscriptionQuery<DB_SubscribeTablesSubscription, DB_SubscribeTablesSubscriptionVariables>(SubscribeTablesDocument, { restaurant_id: restaurantId })
   
   const tables: Tables = res.data?.tables ?? []
   
   return {
      tables,
      tablesLoading: res.isLoading,
   }
   
}

// export const useCreateTableService = (restaurantId: Nullable<string>) => {
//
//    const queryClient = useQueryClient()
//    const session = useSession()
//
//    const createTableMutation = useCreateTableMutation(queryClient.get(), {
//       onSuccess: data => {
//          queryClient.successAlert()
//       },
//    })
//    useMutationService(createTableMutation)
//
//    const createTableSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
//       no_of_chairs: z.number().min(1),
//       qr_codes: z.any(z.any()),
//       name: presets.name
//    }))
//
//    const createTable = (data: InferType<typeof createTableSchema>) => {
//
//       createTableMutation.mutate({
//          no_of_chairs: data.no_of_chairs,
//          restaurant_id: restaurantId,
//          name: data.name
//       })
//    }
//
//    return {
//       createTable,
//       createTableSchema
//    }
//
// }
