import { Categories, Category } from '@/graphql/categories/types'
import {
   useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery, useGetCategoryQuery, useUpdateCategoryMutation,
} from '@/graphql/generated'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export const useCreateCategoryService = (restaurantId: Nullable<string>, role: 'create' | 'update' | 'delete', category?: Category) => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createCategoryMutation = useCreateCategoryMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Category created')
      },
   })
   useMutationService(createCategoryMutation)
   
   const updateCategoryMutation = useUpdateCategoryMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Category updated')
      },
   })
   useMutationService(updateCategoryMutation)
   
   const deleteCategoryMutation = useDeleteCategoryMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Category deleted')
      },
   })
   useMutationService(deleteCategoryMutation)
   
   const categorySchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      name: presets.name,
   }))
   
   const createCategory = (data: InferType<typeof categorySchema>) => {
      createCategoryMutation.mutate({
         restaurant_id: restaurantId,
         ...data,
      })
   }
   
   const updateCategory = (data: InferType<typeof categorySchema>) => {
      createCategoryMutation.mutate({
         restaurant_id: restaurantId,
         ...data,
      })
   }
   
   const deleteCategory = () => deleteCategoryMutation.mutate({ id: category?.id })
   
   const categoryDefaultValues: InferType<typeof categorySchema> | null = category ? {
      name: category.name,
   } : null
   
   return {
      categoryDefaultValues,
      deleteCategory,
      mutateCategory: role === 'create' ? createCategory : updateCategory,
      categorySchema,
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
   
   const categories: Categories = res.data?.categories ?? []
   
   return {
      categories,
      categoriesLoading: res.isLoading,
      categorySelectProps: {
         options: !res.isLoading ? categories.map(c => ({ value: c.id, label: c.name })) : [{ value: '', label: 'Loading...' }],
         isDisabled: res.isLoading,
      },
   }
   
}
