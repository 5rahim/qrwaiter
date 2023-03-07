import { useCreateItemMutation, useDeleteItemMutation, useGetItemQuery, useGetItemsQuery, useUpdateItemMutation } from '@/graphql/generated'
import { Item, Items } from '@/graphql/items/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export const useItemService = (restaurantId: Nullable<string>, role: 'create' | 'update' | 'delete', item?: Item) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createItemMutation = useCreateItemMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Item created')
      },
   })
   useMutationService(createItemMutation)
   
   const updateItemMutation = useUpdateItemMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Item updated')
      },
   })
   useMutationService(updateItemMutation)
   
   const deleteItemMutation = useDeleteItemMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Item deleted')
      },
   })
   useMutationService(deleteItemMutation)
   
   const itemSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      available: presets.switch,
      category_id: presets.name,
      choices: z.array(z.any()),
      description: z.string().nullish(),
      images: presets.imageGrid,
      name: presets.name,
      price: presets.price,
      related_to: z.array(z.string()),
      variations: z.array(z.any()),
   }))
   
   const createItem = (data: InferType<typeof itemSchema>) => {
      createItemMutation.mutate({
         restaurant_id: restaurantId,
         ...data,
      })
   }
   
   const updateItem = (data: InferType<typeof itemSchema>) => {
      updateItemMutation.mutate({
         id: item?.id,
         ...data,
      })
   }
   
   const deleteItem = () => deleteItemMutation.mutate({ id: item?.id })
   
   const itemDefaultValues: InferType<typeof itemSchema> | undefined = item ? {
      available: item.available,
      category_id: item.category_id,
      choices: item.choices,
      description: item.description,
      images: item.images,
      name: item.name,
      price: item.price,
      related_to: item.related_to,
      variations: item.variations,
   } : undefined
   
   return {
      itemDefaultValues,
      mutateItem: role === 'create' ? createItem : updateItem,
      itemSchema,
      deleteItem,
   }
   
}

export const useItem = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetItemQuery(queryClient.get(), { id }, { refetchOnMount: 'always' })
   
   const item: Item = res.data?.items_by_pk
   
   return {
      item,
      itemLoading: res.isLoading,
   }
   
}


export const useItems = (restaurantId: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetItemsQuery(queryClient.get(), { restaurant_id: restaurantId }, { refetchOnMount: 'always' })
   
   const items: Items = res.data?.items ?? []
   
   return {
      items,
      itemsLoading: res.isLoading,
      itemSelectProps: {
         options: !res.isLoading ? items.map(i => ({ value: i.id, label: i.name })) : [{ value: '', label: 'Loading...' }],
         isDisabled: res.isLoading,
      },
   }
   
}
