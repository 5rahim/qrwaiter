import { useCreateRestaurantMutation, useUpdateRestaurantDetailsMutation, useUpdateRestaurantThemeMutation } from '@/graphql/generated'
import { useMutationService } from '@/graphql/use-mutation-service'
import { useQueryClient } from '@/graphql/use-query-client'
import { useLinks } from '@/hooks/use-links'
import { InferType, Nullable } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const useCreateRestaurantService = () => {
   
   const queryClient = useQueryClient()
   const session = useSession()
   const router = useRouter()
   const links = useLinks()
   
   const createRestaurantMutation = useCreateRestaurantMutation(queryClient.get(), {
      onSuccess: data => {
         queryClient.successAlert('Restaurant created')
         router.push(links.to(s => s.admin.home))
      },
   })
   useMutationService(createRestaurantMutation)
   
   const createRestaurantSchema = createTypesafeFormSchema(({ z, presets }) => z.object({
      name: presets.name,
      slug: z.string().min(4, 'URL slug must contain at least 4 characters')
         // .transform(v => v.replaceAll(/\s/g, ''))
             .refine((val) => !val.match(/[^a-z-]/g) && !val.match(/\s/g), { message: 'Invalid URL' }),
      description: z.string().trim().nullish(),
   }))
   
   const createRestaurant = (data: InferType<typeof createRestaurantSchema>) => {
      // console.log(data)
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
