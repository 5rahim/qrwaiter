'use client'

import CategoryForm from '@/app/(admin)/admin/menu/categories/CategoryForm'
import { SortableItem } from '@/components/sortable/SortableItem'
import { SortableItems } from '@/components/sortable/SortableItems'
import { useCategories, useCategoryOrderService } from '@/graphql/services/category.client'
import { Categories, Category } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { Button } from '@ui/main/forms/button/Button'
import { PageHeader } from '@ui/main/layout/page-header/PageHeader'
import { Modal } from '@ui/main/overlay/modal/Modal'
import React from 'react'

interface CategoryListProps {
   children?: React.ReactNode
   rid: string
}

const CategoryList: React.FC<CategoryListProps> = (props) => {
   
   const { children, rid, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   
   const createModal = useDisclosure(false)
   
   const { categories, categoriesLoading, refetchCategories } = useCategories(rid)
   const { updateCategoryOrder } = useCategoryOrderService()
   
   const onMutation = () => {
      createModal.close()
      refetchCategories()
   }
   
   return (
      <>
         <PageHeader title="Categories" action={<><Button onClick={createModal.open}>Add a category</Button></>} />
         
         <SortableItems<Categories>
            data={categories}
            isLoading={categoriesLoading}
            onOrderChange={order => updateCategoryOrder({ order })}
         >
            {(items) => items.map(category => (
               <CategoryItem key={category?.id} category={category} onMutation={onMutation} />
            ))}
         </SortableItems>
         
         <Modal isOpen={createModal.isOpen} onClose={createModal.close} size="xl">
            <CategoryForm
               role="create"
               rid={rid}
               onSuccess={onMutation}
               categoryCount={categories.length}
            />
         </Modal>
      </>
   )
   
}

export default CategoryList

export function CategoryItem({ category, onMutation }: { category: Category, onMutation: () => void }) {
   
   const editModal = useDisclosure(false)
   
   if (!category) return null
   
   
   return (
      <>
         <SortableItem key={category?.id} id={category?.id}>
            <span className="font-semibold cursor-pointer" onClick={editModal.open}>{category?.name}</span>
         </SortableItem>
         
         <Modal isOpen={editModal.isOpen} onClose={editModal.close} size="xl">
            <CategoryForm
               role="update"
               rid={category.restaurant_id}
               onSuccess={onMutation}
               category={category}
            />
         </Modal>
      </>
   )
}
