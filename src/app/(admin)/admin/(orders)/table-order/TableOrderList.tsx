'use client'

import { TableOrders } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDateFormatter } from '@/hooks/use-date-formatter'
import { useLinks } from '@/hooks/use-links'
import { HiCursorClick } from '@react-icons/all-files/hi/HiCursorClick'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@ui/main/data-display/badge/Badge'
import { DataGrid } from '@ui/shared/data-grid/DataGrid'
import _ from 'lodash'
import Link from 'next/link'
import React, { useMemo } from 'react'

interface TableOrderListProps {
   children?: React.ReactNode
   data: TableOrders,
   isLoading: boolean
}

export const TableOrderList: React.FC<TableOrderListProps> = (props) => {
   
   const { children, data, isLoading, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const dateFormatter = useDateFormatter()
   
   const columns = useMemo<ColumnDef<TableOrders[0]>[]>(() => {
      return [
         {
            accessorKey: 'order_number',
            header: 'Order',
            cell: info => <Link
               href={links.aware(links.to(s => s.admin.tableOrder, { key: 'toid', value: info.row.original?.id as string }))}
               className="flex items-center gap-4"
            >
               <span className="text-xl font-semibold flex-none">{info.getValue() as string}</span>
               <HiCursorClick className="text-lg" />
            </Link>,
            footer: props => props.column.id,
            meta: {
               href: '/',
            },
         },
         {
            accessorKey: 'table_id',
            header: () => 'Table',
            cell: info => info.row.original?.table?.name,
            footer: props => props.column.id,
            size: 90,
         },
         {
            accessorKey: 'status',
            header: 'Status',
            enableSorting: false,
            cell: info => <Badge intent="success-solid" className="animate-pulse">{_.capitalize(info.getValue() as string)}</Badge>,
            footer: props => props.column.id,
            size: 90,
         },
         {
            accessorKey: 'created_at',
            header: 'Creation date',
            cell: info => dateFormatter.formatDate(info.getValue() as string, 'short with hours'),
            footer: props => props.column.id,
            size: 90,
         },
      ]
   }, [data])
   
   return (
      <>
         <DataGrid<TableOrders>
            columns={columns}
            data={data}
            dataCount={data?.length ?? 0}
            isLoading={isLoading}
            isFetching={false}
            itemsPerPage={15}
            hideColumns={[
               { below: 600, hide: ['total'] },
               { below: 500, hide: ['created_at'] },
               { below: 400, hide: ['table_id'] },
            ]}
            enableRowSelection={false}
            onItemSelected={data => {
               console.log(data)
            }}
         />
      </>
   )
   
}
