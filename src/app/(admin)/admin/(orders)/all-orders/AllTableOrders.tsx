'use client'

import { TableOrderList } from '@/app/(admin)/admin/(orders)/table-order/TableOrderList'
import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { useTableOrdersSubscription } from '@/graphql/services/table-order.client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import React from 'react'

interface AllTableOrdersProps {
   children?: React.ReactNode
}

export const AllTableOrders: React.FC<AllTableOrdersProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   
   const { tableOrders, tableOrdersLoading } = useTableOrdersSubscription(restaurant?.id)
   
   return (
      <>
         <TableOrderList data={tableOrders} isLoading={tableOrdersLoading} />
      </>
   )
   
}
