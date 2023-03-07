import { useCreateOrdersMutation, useGetOrderQuery } from '@/graphql/generated'
import { Order } from '@/graphql/orders/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export const useOrder = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetOrderQuery(queryClient.get(), { id }, { refetchOnMount: 'always' })
   
   const order: Order = res.data?.orders_by_pk
   
   return {
      order,
      orderLoading: res.isLoading,
   }
   
}

export const useCreateOrdersService = (tableOrderId: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createOrdersMutation = useCreateOrdersMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Order placed')
      },
   })
   useMutationService(createOrdersMutation)
   
   const orderSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      chair_number: z.number().min(1),
      items: z.any(), // selection
      subtotal: presets.price,
      total: presets.price,
      total_tax: presets.price,
      table_order_id: presets.name,
   }))
   
   return {
      orderSchema,
      createOrdersMutation,
   }
   
}
