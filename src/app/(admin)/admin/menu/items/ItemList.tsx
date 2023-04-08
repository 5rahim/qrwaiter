'use client'

import { DataGrid } from '@/components/ui/shared/data-grid/DataGrid'
import { useDataGridFilter, useDataGridFilterFn } from '@/components/ui/shared/data-grid/DataGridFilter'
import { useCategories } from '@/graphql/services/category.client'
import { useItems } from '@/graphql/services/item.client'
import { Items } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDateFormatter } from '@/hooks/use-date-formatter'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { usePriceFormatter } from '@/hooks/use-price-formatter'
import { BiData } from '@react-icons/all-files/bi/BiData'
import { BiEditAlt } from '@react-icons/all-files/bi/BiEditAlt'
import { BiShow } from '@react-icons/all-files/bi/BiShow'
import { ColumnDef } from '@tanstack/react-table'
import LinkButton from '@ui/main/forms/button/LinkButton'
import { PageHeader } from '@ui/main/layout/page-header/PageHeader'
import { Drawer } from '@ui/main/overlay/drawer/Drawer'
import _ from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

interface ItemListProps {
   children?: React.ReactNode
   rid: string
}

const ItemList: React.FC<ItemListProps> = (props) => {
   
   const { children, rid, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const dateFormatter = useDateFormatter()
   const priceFormatter = usePriceFormatter()
   
   const createModal = useDisclosure(false)
   
   const { items, itemsLoading, itemSelectProps } = useItems(rid)
   const { categories, categorySelectProps } = useCategories(rid)
   
   const columns = useMemo<ColumnDef<Items[0]>[]>(() => {
      return [
         {
            accessorKey: 'name',
            header: 'Item',
            cell: info => <Link
               href={links.aware(links.to(s => s.admin.editItem, { key: 'iid', value: info.row.original?.id as string }))}
               className="flex items-center gap-4"
            >
               <div className="w-14 h-14 flex-none rounded-md overflow-hidden bg-gray-200 relative"><Image
                  src={info.row.original?.images?.main}
                  fill
                  quality={5}
                  alt=""
                  style={{ objectFit: "cover" }}
                  sizes="5rem"
               /></div>
               <span className="text-lg font-semibold flex-none">{info.getValue() as string}</span>
               <BiEditAlt className="text-lg" />
            </Link>,
            footer: props => props.column.id,
            meta: {
               href: '/',
            },
         },
         {
            accessorKey: 'price',
            header: () => 'Price',
            cell: info => priceFormatter.toFormat(info.getValue() as number),
            footer: props => props.column.id,
            size: 90,
         },
         {
            accessorKey: 'available',
            header: 'Status',
            enableSorting: false,
            cell: info => info.getValue() === true ? 'Available' : 'Not available',
            footer: props => props.column.id,
            size: 90,
            ...useDataGridFilterFn('boolean'),
            meta: {
               ...useDataGridFilter('boolean', 'Availability', BiShow),
            },
         },
         {
            accessorKey: 'category_id',
            header: () => 'Category',
            cell: info => <span>{_.find(categories, ['id', info.getValue()])?.name}</span>,
            footer: props => props.column.id,
            ...useDataGridFilterFn('select'),
            size: 110,
            meta: {
               ...useDataGridFilter('select', 'Category', BiData, categorySelectProps.options),
            },
         },
         {
            accessorKey: 'created_at',
            header: 'Creation date',
            cell: info => dateFormatter.formatDate(info.getValue() as string, 'short with hours'),
            footer: props => props.column.id,
            size: 90,
         },
      ]
   }, [categories])
   
   return (
      <>
         <PageHeader title="Items" action={<><LinkButton to={links.to(s => s.admin.createItem)}>Add an item</LinkButton></>} />
         
         <DataGrid<Items>
            columns={columns}
            data={items}
            dataCount={items?.length ?? 0}
            isLoading={itemsLoading}
            isFetching={false}
            itemsPerPage={15}
            hideColumns={[
               { below: 600, hide: ['total'] },
               { below: 500, hide: ['created_at'] },
               { below: 400, hide: ['id'] },
            ]}
            enableRowSelection={false}
            onItemSelected={data => {
               console.log(data)
            }}
         />
         
         <Drawer isOpen={createModal.isOpen} onClose={createModal.close} size="lg" withCloseButton>
         
         </Drawer>
      </>
   )
   
}

export default ItemList
