import { useCreateRestaurantMutation, useUpdateRestaurantDetailsMutation, useUpdateRestaurantThemeMutation } from '@/graphql/generated'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'

export const useCreateRestaurantService = () => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   
   const createRestaurantMutation = useCreateRestaurantMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Restaurant created')
      },
   })
   useMutationService(createRestaurantMutation)
   
   const createRestaurantSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      name: presets.name,
      slug: z.string().min(4),
      description: z.string().nullable(),
   }))
   
   const createRestaurant = (data: InferType<typeof createRestaurantSchema>) => {
      createRestaurantMutation.mutate({
         owner_id: session.data?.user?.id,
         customization: {}, // TODO: Add default customization
         ...data,
      })
   }
   
   return {
      createRestaurant,
      createRestaurantSchema,
   }
   
}

export const useRestaurantService = (id: Nullable<string>) => {
   
   const queryClient = useQueryClient()
   const updateDetailsMutation = useUpdateRestaurantDetailsMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert()
      },
   })
   const updateThemeMutation = useUpdateRestaurantThemeMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert()
      },
   })
   useMutationService(updateDetailsMutation)
   useMutationService(updateThemeMutation)
   
   const detailsSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      name: presets.name,
      description: z.string().nullable(),
   }))
   
   const themeSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      customization: z.any(),
   }))
   
   const updateDetails = (data: InferType<typeof detailsSchema>) => {
      updateDetailsMutation.mutate({ id, ...data })
   }
   
   const updateTheme = (data: InferType<typeof themeSchema>) => {
      updateThemeMutation.mutate({ id, customization: data.customization ?? {} })
   }
   
   return {
      detailsSchema,
      themeSchema,
      updateDetails,
      updateTheme,
   }
   
}
