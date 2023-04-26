import { useCurrentChair, useCurrentTableOrder } from '@/atoms/table-order.atom'
import { useCreateOrderMutation, useGetOrderByTableOrderQuery, useGetOrderQuery, useUpdateOrderMutation } from '@/graphql/generated'
import { Order } from '@/graphql/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export const useOrder = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetOrderQuery(queryClient.get(), { id }, { refetchOnMount: 'always' })
   
   const order: Order = res.data?.orders_by_pk ?? null
   
   return {
      order,
      orderLoading: res.isLoading,
      refetchOrder: res.refetch,
   }
   
}
export const useOrderByTableOrder = () => {
   
   const queryClient = useQueryClient()
   const { tableOrder } = useCurrentTableOrder()
   const { chair } = useCurrentChair()
   
   const res = useGetOrderByTableOrderQuery(queryClient.get(),
      { table_order_id: tableOrder?.id, chair_number: chair?.chairNo ?? 0 },
      { refetchOnMount: false, refetchOnWindowFocus: false, enabled: !!tableOrder?.id && !!chair?.chairNo })
   
   const order: Order = res.data?.orders[0] ?? null
   
   return {
      order,
      orderLoading: res.isLoading,
      refetchOrder: res.refetch,
   }
   
}

export const useOrderService = (onComplete?: () => void) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createOrderMutation = useCreateOrderMutation(queryClient.get(), {
      onSuccess: data => {
         onComplete && onComplete()
         // queryClient.successAlert('Order placed')
      },
   })
   useMutationService(createOrderMutation)
   
   const updateOrderMutation = useUpdateOrderMutation(queryClient.get())
   
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
      createOrder: createOrderMutation.mutate,
      updateOrder: updateOrderMutation.mutate,
   }
   
}
