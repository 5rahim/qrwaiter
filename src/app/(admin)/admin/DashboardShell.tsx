import AdminNav from '@/app/(admin)/admin/AdminNav'
import React from 'react'


interface DashboardShellProps {
   children?: React.ReactNode
   title: string
   top?: React.ReactNode
}

async function DashboardShell(props: DashboardShellProps) {
   
   const { children, title, top, ...rest } = props
   
   return (
      <>
         <div className="bg-brand-700 pb-32">
            <AdminNav />
            <header className="py-10">
               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
               </div>
            </header>
         </div>
         
         <main className="-mt-32">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
               {top}
               <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                  {children}
               </div>
            </div>
         </main>
      </>
   )
   
}

export default DashboardShell
