'use client'

import { ChoiceField } from '@/components/options-field/ChoiceField'
import { useCategories } from '@/graphql/services/category.client'
import { useItemService } from '@/graphql/services/item.client'
import { useLinks } from '@/hooks/use-links'
import { InferType } from '@/types'
import { siteLinkTo } from '@/utils/links'
import LinkButton from '@ui/main/forms/button/LinkButton'
import { useImageGridHandler } from '@ui/main/forms/image-grid-input/ImageGridInput'
import { Field } from '@ui/main/forms/typesafe-form/Field'
import { TypesafeForm } from '@ui/main/forms/typesafe-form/TypesafeForm'
import { DividerWithLabel } from '@ui/main/layout/divider/DividerWithLabel'
import { DangerZone } from '@ui/shared/danger-zone/DangerZone'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import React from 'react'

interface ItemFormProps {
   children?: React.ReactNode
   role: 'create' | 'update'
   rid: string
}

const ItemForm: React.FC<ItemFormProps> = (props) => {
   
   const { children, rid, role, ...rest } = props
   const links = useLinks()
   
   const { itemSchema, mutateItem, deleteItem, itemDefaultValues } = useItemService(rid, "create")
   const { categories, categoriesLoading, categorySelectProps } = useCategories(rid)
   
   const nbCategories = categories.length
   
   const imagesHandler = useImageGridHandler()
   
   return (
      <>
         <ShowOnly when={!categoriesLoading}>
            <TypesafeForm<InferType<typeof itemSchema>>
               schema={itemSchema}
               defaultValues={itemDefaultValues}
               onSubmit={mutateItem}
            >
               <ShowOnly when={nbCategories > 0}>
                  
                  <div className="md:flex w-full gap-5">
                     <div className="w-full space-y-2">
                        <Field.Text name="name" label="Item name" placeholder="" />
                        <Field.Textarea name="description" label="Item description" placeholder="" />
                        <Field.ImageGrid name="images" label="Images" handler={imagesHandler} />
                        <DividerWithLabel>Choices</DividerWithLabel>
                        <ChoiceField name="Choices" />
                     </div>
                     
                     <div className="w-full space-y-2">
                        <Field.Price name="price" label="Price" />
                        <Field.Select name="category_id" {...categorySelectProps} label="Category" />
                        
                        <Field.MultiSelect name="related_to" label="Related items" options={[{ value: 'cheeseburger-1', label: 'Cheeseburger' }]} />
                        <Field.Switch name="available" label="This item is available" />
                        <Field.Submit role={role} />
                     </div>
                  </div>
                  
                  <ShowOnly when={role === 'update'}>
                     <DangerZone
                        action="Delete this category" onDelete={() => {
                        deleteItem()
                     }} className=""
                     />
                  </ShowOnly>
               </ShowOnly>
               
               <ShowOnly when={nbCategories === 0}>
                  <p className="text-center text-lg">You need to add at least one category before adding an item.</p>
                  <div className="text-center"><LinkButton to={siteLinkTo(s => s.admin.categories)}>Add a category</LinkButton></div>
               </ShowOnly>
            </TypesafeForm>
         </ShowOnly>
         
         <ShowOnly when={categoriesLoading}>
            <LoadingSpinner />
         </ShowOnly>
      </>
   )
   
}

export default ItemForm
