import { BiLeftArrowAlt } from '@react-icons/all-files/bi/BiLeftArrowAlt'
import LinkButton from '@ui/main/forms/button/LinkButton'
import React from 'react'


interface DashboardShellProps {
   children?: React.ReactNode
   title: string
   top?: React.ReactNode
   backTo?: string
}

async function DashboardShell(props: DashboardShellProps) {
   
   const { children, title, top, backTo, ...rest } = props
   
   return (
      <>
         {title.length > 0 && <div className="flex w-full items-center mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-2">
            {backTo && <LinkButton to={backTo} size="xl" intent="primary-basic" className="pl-0"><BiLeftArrowAlt /></LinkButton>}
             <h1 className="text-3xl w-full font-bold tracking-tight">{title}</h1>
         </div>}
   
         <main className="flex-1">
      
            <div className="mx-auto px-4 sm:px-6 md:px-8">
               {top}
               <div className="py-4">
                  <div className="">
                     {children}
                  </div>
               </div>
            </div>
         </main>
         <div className="text-center font-bold text-sm text-gray-600 py-5">Virtual Solutions - QR Waiter</div>
      </>
   )
   
}

export default DashboardShell
