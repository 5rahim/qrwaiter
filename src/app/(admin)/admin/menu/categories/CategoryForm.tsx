'use client'

import { useCategoryService } from '@/graphql/services/category.client'
import { Category } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { InferType } from '@/types'
import { Field } from '@ui/main/forms/typesafe-form/Field'
import { TypesafeForm } from '@ui/main/forms/typesafe-form/TypesafeForm'
import { DangerZone } from '@ui/shared/danger-zone/DangerZone'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import React from 'react'

interface CategoryFormProps {
   children?: React.ReactNode
   role: 'create' | 'update'
   rid: string
   category?: Category
   onSuccess: () => void
   categoryCount?: number
}

const CategoryForm: React.FC<CategoryFormProps> = (props) => {
   
   const { children, rid, role, category, onSuccess, categoryCount, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   const { categorySchema, categoryDefaultValues, mutateCategory, deleteCategory } = useCategoryService(rid, role, category, categoryCount, onSuccess)
   
   return (
      <>
         <TypesafeForm<InferType<typeof categorySchema>>
            schema={categorySchema}
            defaultValues={categoryDefaultValues}
            onSubmit={mutateCategory}
         >
            <Field.Text name="name" label="Category name" placeholder="e.g: Appetizers, Drinks..." />
            <ShowOnly when={role === 'update'}>
               <DangerZone
                  action="Delete this category" onDelete={() => {
                  deleteCategory()
                  onSuccess()
               }} className=""
               />
            </ShowOnly>
            <Field.Submit role={role} />
         </TypesafeForm>
      </>
   )
   
}

export default CategoryForm
