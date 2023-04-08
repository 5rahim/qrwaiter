import { getLatestTableOrderByTableId } from '@/graphql/services/table-order.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Layout({
   children, params: { lng, slug, tid_chair },
}: { children: React.ReactNode, params: { lng: string, slug: string, tid_chair: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const tid = tid_chair.split('-')[0]
   const chairNumber = tid_chair.split('-')[1]
   
   const tableOrder = await getLatestTableOrderByTableId(tid)
   
   if (!tableOrder) {
      redirect(siteLinkTo(s => s.main.home))
   }
   
   return (
      <div>
         {children}
      </div>
   )
}
