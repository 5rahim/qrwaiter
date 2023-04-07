'use client'

import ItemForm from '@/app/(admin)/admin/menu/items/ItemForm'
import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { useItem } from '@/graphql/services/item.client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import React from 'react'

interface EditItemPageProps {
   children?: React.ReactNode
   iid: string
}

export const EditItemPage: React.FC<EditItemPageProps> = (props) => {
   
   const { children, iid, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   
   const { item, itemLoading, refetchItem } = useItem(iid)
   
   if (itemLoading) return <LoadingSpinner />
   
   return (
      <>
         <ItemForm role="update" rid={restaurant?.id} item={item} refetchItem={refetchItem} />
      </>
   )
   
}
