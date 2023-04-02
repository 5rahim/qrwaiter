'use client'

import { useCategories, useCategoryOrderService } from '@/graphql/services/category.client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import LinkButton from '@ui/main/forms/button/LinkButton'
import { PageHeader } from '@ui/main/layout/page-header/PageHeader'
import { Drawer } from '@ui/main/overlay/drawer/Drawer'
import React from 'react'

interface ItemListProps {
   children?: React.ReactNode
   rid: string
}

const ItemList: React.FC<ItemListProps> = (props) => {
   
   const { children, rid, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   
   const createModal = useDisclosure(false)
   
   const { categories, categoriesLoading } = useCategories(rid)
   const { updateCategoryOrder } = useCategoryOrderService()
   
   return (
      <>
         <PageHeader title="Items" action={<><LinkButton to={links.to(s => s.admin.createItem)}>Add an item</LinkButton></>} />
         
         
         <Drawer isOpen={createModal.isOpen} onClose={createModal.close} size="lg" withCloseButton>
         
         </Drawer>
      </>
   )
   
}

export default ItemList
