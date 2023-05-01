'use client'

import { useTableService } from '@/graphql/services/table.client'
import { TableInfo } from '@/graphql/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { InferType } from '@/types'
import { Field } from '@ui/main/forms/typesafe-form/Field'
import { TypesafeForm } from '@ui/main/forms/typesafe-form/TypesafeForm'
import { DangerZone } from '@ui/shared/danger-zone/DangerZone'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import React from 'react'

interface TableFormProps {
   children?: React.ReactNode
   role: 'create' | 'update'
   rid: string
   table?: TableInfo
   onSuccess: () => void
   tableCount?: number
}

const TableForm: React.FC<TableFormProps> = (props) => {
   
   const { children, rid, role, table, onSuccess, tableCount, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   const { tableSchema, tableDefaultValues, mutateTable, deleteTable } = useTableService(rid, role, table, tableCount, onSuccess)
   
   return (
      <>
         <TypesafeForm<InferType<typeof tableSchema>>
            schema={tableSchema}
            defaultValues={tableDefaultValues}
            onSubmit={mutateTable}
         >
            <Field.Text name="name" label="Table name" placeholder="e.g: Table 1 or Table A" />
            <Field.Number name="no_of_chairs" label="Number of chairs" help="This number is used to generate QR codes the a table." min={1} />
            <Field.Submit role={role} />
         </TypesafeForm>
         <ShowOnly when={role === 'update'}>
            <DangerZone
               action="Delete this table" onDelete={() => {
               deleteTable()
               // onSuccess()
            }} className="mt-4"
            />
         </ShowOnly>
      </>
   )
   
}

export default TableForm
