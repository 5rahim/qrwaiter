import {
   useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery, useGetCategoryQuery, useUpdateCategoryMutation,
   useUpdateCategoryOrderMutation,
} from '@/graphql/generated'
import { Categories, Category } from '@/graphql/types'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export const useCategoryService = (restaurantId: Nullable<string>, role: 'create' | 'update' | 'delete', category?: Category, categoryCount?: number, onSuccess?: () => void) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createCategoryMutation = useCreateCategoryMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Category created')
         onSuccess && onSuccess()
      },
   })
   useMutationService(createCategoryMutation)
   
   const updateCategoryMutation = useUpdateCategoryMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Category updated')
         onSuccess && onSuccess()
      },
   })
   useMutationService(updateCategoryMutation)
   
   const deleteCategoryMutation = useDeleteCategoryMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Category deleted')
         onSuccess && onSuccess()
      },
   })
   useMutationService(deleteCategoryMutation)
   
   const categorySchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      name: presets.name,
   }))
   
   const createCategory = (data: InferType<typeof categorySchema>) => {
      createCategoryMutation.mutate({
         restaurant_id: restaurantId,
         order: categoryCount ?? 0,
         ...data,
      })
   }
   
   const updateCategory = (data: InferType<typeof categorySchema>) => {
      updateCategoryMutation.mutate({
         id: category?.id,
         ...data,
      })
   }
   
   const deleteCategory = () => deleteCategoryMutation.mutate({ id: category?.id })
   
   const categoryDefaultValues: InferType<typeof categorySchema> | undefined = category ? {
      name: category.name,
   } : undefined
   
   return {
      categoryDefaultValues,
      deleteCategory,
      mutateCategory: role === 'create' ? createCategory : updateCategory,
      categorySchema,
   }
   
}

export const useCategoryOrderService = () => {
   
   const queryClient = useQueryClient()
   
   const updateCategoryOrderMutation = useUpdateCategoryOrderMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Position changed')
      },
   })
   useMutationService(updateCategoryOrderMutation)
   
   return {
      updateCategoryOrder: updateCategoryOrderMutation.mutate,
   }
   
}


export const useCategory = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetCategoryQuery(queryClient.get(), { id }, { refetchOnMount: 'always' })
   
   const category: Category = res.data?.categories_by_pk
   
   return {
      category,
      categoryLoading: res.isLoading,
   }
   
}


export const useCategories = (restaurantId: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   
   const res = useGetCategoriesQuery(queryClient.get(), { restaurant_id: restaurantId }, { refetchOnMount: 'always' })
   // const res = useSubscriptionQuery<DB_SubscribeCategoriesSubscription, DB_SubscribeCategoriesSubscriptionVariables>(SubscribeCategories, {
   // restaurant_id: restaurantId })
   
   const categories: Categories = res.data?.categories ?? []
   
   return {
      categories,
      categoriesLoading: res.isLoading,
      categorySelectProps: {
         options: !res.isLoading ? categories.map(c => ({ value: c.id, label: c.name })) : [{ value: '', label: 'Loading...' }],
         isDisabled: res.isLoading,
      },
      refetchCategories: () => res.refetch(),
   }
   
}
