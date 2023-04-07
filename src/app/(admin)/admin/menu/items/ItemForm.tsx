'use client'

import { ChoiceField } from '@/components/options-field/ChoiceField'
import { VariationField } from '@/components/options-field/VariationField'
import { useCategories } from '@/graphql/services/category.client'
import { useItemService } from '@/graphql/services/item.client'
import { Item } from '@/graphql/types'
import { useLinks } from '@/hooks/use-links'
import { InferType } from '@/types'
import { siteLinkTo } from '@/utils/links'
import LinkButton from '@ui/main/forms/button/LinkButton'
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
   item?: Item
   refetchItem?: () => void
}

const ItemForm: React.FC<ItemFormProps> = (props) => {
   
   const { children, rid, role, item, refetchItem, ...rest } = props
   const links = useLinks()
   
   const { itemSchema, mutateItem, deleteItem, itemDefaultValues, imagesHandler } = useItemService(rid, role, item, refetchItem)
   const { categories, categoriesLoading, categorySelectProps } = useCategories(rid)
   
   const nbCategories = categories.length
   
   
   return (
      <>
         <ShowOnly when={!categoriesLoading}>
            <TypesafeForm<InferType<typeof itemSchema>>
               schema={itemSchema}
               onError={console.log}
               defaultValues={itemDefaultValues}
               onSubmit={mutateItem}
            >
               <ShowOnly when={nbCategories > 0}>
      
                  <div className="md:flex w-full gap-8">
                     <div className="w-full space-y-4">
                        <Field.Text name="name" label="Item name" placeholder="" />
                        <Field.Textarea name="description" label="Item description" placeholder="" />
                        <Field.ImageGrid name="images" label="Images" handler={imagesHandler} />
                        <DividerWithLabel>Choices</DividerWithLabel>
                        <ChoiceField defaultValues={item?.choices} />
                        <DividerWithLabel>Variations</DividerWithLabel>
                        <VariationField defaultValues={item?.variations} />
                     </div>
         
                     <div className="w-full space-y-4">
                        <Field.Price name="price" label="Price" />
                        <Field.Select name="category_id" {...categorySelectProps} label="Category" />
            
                        <Field.MultiSelect
                           name="allergens" label="Allergens" options={[
                           { value: "milk", label: "Milk" },
                           { value: "eggs", label: "Eggs" },
                           { value: "fish", label: "Fish" },
                           { value: "crustaceanShellfish", label: "Crustacean shellfish" },
                           { value: "treeNuts", label: "Tree nuts" },
                           { value: "peanuts", label: "Peanuts" },
                           { value: "wheat", label: "Wheat" },
                           { value: "soybeans", label: "Soybeans" },
                           { value: "sesame", label: "Sesame" },
                           { value: "mustard", label: "Mustard" },
                           { value: "lupin", label: "Lupin" },
                           { value: "mollusks", label: "Mollusks" },
                           { value: "celery", label: "Celery" },
                           { value: "sulfites", label: "Sulfites" },
                        ]}
                        />
                        <Field.Switch name="available" label="This item is available" />
                        <Field.Submit role={role} className="w-full" />
                     </div>
                  </div>
                  
                  <ShowOnly when={role === 'update'}>
                     <DangerZone
                        action="Delete this item" onDelete={() => {
                        deleteItem()
                     }} className="mt-5"
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
