import TableOrderPreloader from '@/atoms/preloaders/TableOrderPreloader'
import { getTableOrder } from '@/graphql/services/table-order.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Layout({
   children, params: { lng, slug, toid_chair },
}: { children: React.ReactNode, params: { lng: string, slug: string, toid_chair: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const tid = toid_chair.split('_')[0]
   const chairNumber: string | undefined = toid_chair.split('_')[1]
   
   const tableOrder = await getTableOrder(tid)
   
   if (!tableOrder || !chairNumber || !tableOrder.tokens[parseInt(chairNumber) - 1]?.token || tableOrder.status === 'complete') {
      redirect(siteLinkTo(s => s.main.home))
   }
   
   return (
      <div>
         <TableOrderPreloader
            tableOrder={tableOrder}
            chairNumber={parseInt(chairNumber)}
            orderToken={tableOrder.tokens[parseInt(chairNumber) - 1].token}
         />
         {children}
      </div>
   )
}
