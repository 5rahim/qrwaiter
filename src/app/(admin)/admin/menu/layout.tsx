import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import MenuNavbar from '@/app/(admin)/admin/menu/MenuNavbar'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import React from 'react'

export default async function Layout({ children }: { children: React.ReactNode }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      // @ts-ignore
      <DashboardShell
         title="Menu"
         top={
            <div className="rounded-lg bg-white shadow mb-4 overflow-hidden">
               <MenuNavbar />
            </div>
         }
         backTo={siteLinkTo(s => s.admin.items)}
      >
         {children}
      </DashboardShell>
      // <div className="space-y-4">
      //    <MenuNavbar />
      //    <div>
      //       {children}
      //    </div>
      // </div>
   )
}
