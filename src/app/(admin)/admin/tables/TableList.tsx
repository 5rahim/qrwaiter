'use client'

import TableForm from '@/app/(admin)/admin/tables/TableForm'
import { SortableItem } from '@/components/sortable/SortableItem'
import { SortableItems } from '@/components/sortable/SortableItems'
import { useTableOrderService, useTables } from '@/graphql/services/table.client'
import { TableInfo, Tables } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { Button } from '@ui/main/forms/button/Button'
import { PageHeader } from '@ui/main/layout/page-header/PageHeader'
import { Modal } from '@ui/main/overlay/modal/Modal'
import React, { useCallback } from 'react'

interface TableListProps {
   children?: React.ReactNode
   rid: string
}

const TableList: React.FC<TableListProps> = (props) => {
   
   const { children, rid, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   
   const createModal = useDisclosure(false)
   
   const { tables, tablesLoading, refetchTables } = useTables(rid)
   const { updateTableOrder } = useTableOrderService()
   
   const onMutation = useCallback(() => {
      createModal.close()
      refetchTables()
   }, [createModal])
   
   return (
      <>
         <PageHeader title="Tables" action={<><Button onClick={createModal.open}>Add a table</Button></>} />
         
         <SortableItems<Tables>
            data={tables}
            isLoading={tablesLoading}
            onOrderChange={order => updateTableOrder({ order })}
         >
            {(items) => items.map(table => (
               <TableItem key={table?.id} table={table} onMutation={onMutation} />
            ))}
         </SortableItems>
         
         <Modal isOpen={createModal.isOpen} onClose={createModal.close} size="xl">
            <TableForm
               role="create"
               rid={rid}
               onSuccess={onMutation}
               tableCount={tables.length}
            />
         </Modal>
      </>
   )
   
}

export default TableList

export function TableItem({ table, onMutation }: { table: TableInfo, onMutation: () => void }) {
   
   const editModal = useDisclosure(false)
   
   if (!table) return null
   
   return (
      <>
         <SortableItem key={table?.id} id={table?.id}>
            <span className="font-semibold cursor-pointer" onClick={editModal.open}>{table?.name}</span>
         </SortableItem>
         
         <Modal isOpen={editModal.isOpen} onClose={editModal.close} size="xl">
            <TableForm
               role="update"
               rid={table.restaurant_id}
               onSuccess={onMutation}
               table={table}
            />
         </Modal>
      </>
   )
}
