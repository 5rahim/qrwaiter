'use client'

import { currentChairAtom, currentTableOrderAtom, useCurrentTableOrder } from '@/atoms/table-order.atom'
import { useCurrentTableOrderSubscription } from '@/graphql/services/table-order.client'
import { CurrentTableOrder } from '@/graphql/services/table-order.server'
import { User } from '@/graphql/users/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { useHydrateAtoms } from 'jotai/react/utils'
import React, { useEffect } from 'react'

interface TableOrderPreloaderProps {
   children?: React.ReactNode
   user?: User,
   tableOrder: CurrentTableOrder
   chairNumber: number
   orderToken: string
}

const TableOrderPreloader: React.FC<TableOrderPreloaderProps> = (props) => {
   
   const { children, tableOrder, chairNumber, orderToken, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { tableOrder: tableOrderSub } = useCurrentTableOrderSubscription()
   const { setTableOrder } = useCurrentTableOrder()
   
   const createOrderDisclosure = useDisclosure(false)
   
   useHydrateAtoms([
      [currentTableOrderAtom, tableOrder],
      [currentChairAtom, { chairNo: chairNumber, orderToken }],
   ])
   
   useEffect(() => {
       if(tableOrderSub) {
          setTableOrder(tableOrderSub)
       }
   }, [tableOrderSub])
   
   // const { order, orderLoading, refetchOrder } = useOrder(orderToken)
   // const { createOrder, orderSchema } = useCreateOrdersService(() => {
   //    // refetchOrder()
   // })
   //
   // const fired = useDisclosure(false)
   //
   // useEffect(() => {
   //    if(!order && !fired.isOpen) {
   //       createOrder({
   //          id: orderToken,
   //          chair_number: chairNumber ?? 0,
   //          items: [], // selection
   //          subtotal: 0,
   //          total: 0,
   //          total_tax: 0,
   //          table_order_id: tableOrder?.id,
   //       })
   //       fired.open()
   //    }
   // }, [orderLoading])
   
   return null
   
}

export default TableOrderPreloader
