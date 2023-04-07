import { getCurrentSessionUser } from '@/lib/session'
import React from 'react'

export default async function Layout({ children }: { children: React.ReactNode }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         {children}
         {/*</DashboardShell>*/}
      </>
   )
}
