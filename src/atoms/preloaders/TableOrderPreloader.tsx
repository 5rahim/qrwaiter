'use client'

import { currentChairAtom, currentTableOrderAtom } from '@/atoms/table-order.atom'
import { CurrentTableOrder } from '@/graphql/services/table-order.server'
import { User } from '@/graphql/users/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { useHydrateAtoms } from 'jotai/react/utils'
import React from 'react'

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
   
   useHydrateAtoms([
      [currentTableOrderAtom, tableOrder],
      [currentChairAtom, { chairNo: chairNumber, orderToken }],
   ])
   
   return null
   
}

export default TableOrderPreloader
