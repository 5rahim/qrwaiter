'use client'

import { useCurrentUser } from '@/atoms/user.atom'
import { clientEnv } from '@/env/schema.mjs'
import { useAddRestaurantAdministratorMutation } from '@/graphql/generated'
import { useCreateRestaurantService } from '@/graphql/services/restaurant.client'
import { useQueryClient } from '@/graphql/use-query-client'
import { useLinks } from '@/hooks/use-links'
import { InferType } from '@/types'
import { createTypesafeFormSchema } from '@ui/main/forms/typesafe-form/CreateTypesafeFormSchema'
import { Field } from '@ui/main/forms/typesafe-form/Field'
import { TypesafeForm } from '@ui/main/forms/typesafe-form/TypesafeForm'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CreateRestaurantFormProps {
   children?: React.ReactNode
}

const CreateRestaurantForm: React.FC<CreateRestaurantFormProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const router = useRouter()
   const queryClient = useQueryClient()
   const { user } = useCurrentUser()
   const { createRestaurantSchema, createRestaurant } = useCreateRestaurantService()
   
   /**
    * Demo purposes
    * TODO: Remove
    */
   const addAdministrator = useAddRestaurantAdministratorMutation(queryClient.get(), {
      onSuccess: data => {
         router.push(links.to(s => s.admin.home))
      }
   })
   
   return (
      <>
         {/*<TypesafeForm<InferType<typeof createRestaurantSchema>>*/}
         {/*   schema={createRestaurantSchema}*/}
         {/*   defaultValues={{ name: '' }}*/}
         {/*   onSubmit={createRestaurant}*/}
         {/*>*/}
         {/*   <Field.Text name="name" label="Restaurant name" />*/}
         {/*   <Field.Text name="slug" label="Restaurant URL" leftAddon={clientEnv.NEXT_PUBLIC_BASE_URL + '/r/'} />*/}
         {/*   <Field.Textarea name="description" label="Description" />*/}
         {/*   <Field.Submit role="create" />*/}
         {/*</TypesafeForm>*/}
         <TypesafeForm<InferType<typeof createRestaurantSchema>>
            schema={createTypesafeFormSchema(({z}) => z.object({ test: z.any().nullish() }))}
            defaultValues={{ name: '' }}
            onSubmit={() => {
              addAdministrator.mutate({
                 user_id: user?.id,
                 restaurant_id: '68aa727d-f121-4506-a189-6774de26dd8d'
              })
            }}
         >
               <div className="space-y-4 opacity-50 pointer-events-none	select-none">
                  <Field.Text name="name" label="Restaurant name" />
                  <Field.Text name="slug" label="Restaurant URL" leftAddon={clientEnv.NEXT_PUBLIC_BASE_URL + '/r/'} />
                  <Field.Textarea name="description" label="Description" />
                  <Field.Submit role="create" />
               </div>
            <p>/!\ Demo Only - click on the button to be added as an administrator</p>
            <Field.Submit role="create">Join demo restaurant</Field.Submit>
         </TypesafeForm>
      </>
   )
   
}

export default CreateRestaurantForm
