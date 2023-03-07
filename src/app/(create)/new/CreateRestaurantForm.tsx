'use client'

import { clientEnv } from '@/env/schema.mjs'
import { useCreateRestaurantService } from '@/graphql/services/restaurant.client'
import { useLinks } from '@/hooks/use-links'
import { InferType } from '@/types'
import { Field } from '@ui/main/forms/typesafe-form/Field'
import { TypesafeForm } from '@ui/main/forms/typesafe-form/TypesafeForm'
import React from 'react'

interface CreateRestaurantFormProps {
   children?: React.ReactNode
}

const CreateRestaurantForm: React.FC<CreateRestaurantFormProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   
   const { createRestaurantSchema, createRestaurant } = useCreateRestaurantService()
   
   
   return (
      <>
         <TypesafeForm<InferType<typeof createRestaurantSchema>>
            schema={createRestaurantSchema}
            defaultValues={{ name: '' }}
            onSubmit={createRestaurant}
         >
            <Field.Text name="name" label="Restaurant name" />
            <Field.Text name="slug" label="Restaurant URL" leftAddon={clientEnv.NEXT_PUBLIC_BASE_URL + '/r/'} />
            <Field.Textarea name="description" label="Description" />
            <Field.Submit role="create" />
         </TypesafeForm>
      </>
   )
   
}

export default CreateRestaurantForm
