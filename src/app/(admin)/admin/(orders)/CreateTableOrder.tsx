'use client'

import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { Select } from '@/components/ui/main/forms/select/Select'
import { useCreateTableOrderService } from '@/graphql/services/table-order.client'
import { useTables } from '@/graphql/services/table.client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useDisclosure } from '@/hooks/use-disclosure'
import { useLinks } from '@/hooks/use-links'
import { _selectObjectById } from '@/utils/arrays'
import { FaUserPlus } from '@react-icons/all-files/fa/FaUserPlus'
import { FcReading } from '@react-icons/all-files/fc/FcReading'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { Button } from '@ui/main/forms/button/Button'
import { Field } from '@ui/main/forms/typesafe-form/Field'
import { TypesafeForm } from '@ui/main/forms/typesafe-form/TypesafeForm'
import { Modal } from '@ui/main/overlay/modal/Modal'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import React from 'react'

interface CreateTableOrderProps {
   children?: React.ReactNode
}

export const CreateTableOrder: React.FC<CreateTableOrderProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   
   const createModal = useDisclosure(false)
   
   const { tables, tablesLoading } = useTables(restaurant?.id)
   const { createTableOrderSchema, createTableOrder, setTableId } = useCreateTableOrderService()
   
   return (
      <>
         <Button leftIcon={<FaUserPlus />} onClick={createModal.open}>New table order</Button>
         
         <Modal isOpen={createModal.isOpen} onClose={createModal.close} size="xl">
            <div className="flex items-center">
               <IconDisplay icon={<FcReading />} size="lg" intent="primary-basic" className="" />
               <p className="font-bold text-lg">Create a new table order</p>
            </div>
            {tablesLoading && <LoadingSpinner />}
            <ShowOnly when={!tablesLoading}>
               <TypesafeForm schema={createTableOrderSchema} onSubmit={createTableOrder}>
                  {(f) => (
                     <>
                        <Select
                           name="table_id"
                           options={[{ value: '', label: 'Select a table' }, ...tables.map(table => ({ value: table.id, label: table.name }))]}
                           onChange={e => setTableId(e.target.value)}
                        />
                        {!!f.watch('table_id') && <p>Number of
                                                     chairs: <span className="font-bold">{_selectObjectById<any>(f.watch('table_id'))(tables)?.no_of_chairs}</span>
                        </p>}
                        <Field.Submit role="create" />
                     </>
                  )}
               </TypesafeForm>
            </ShowOnly>
         </Modal>
      </>
   )
   
}
