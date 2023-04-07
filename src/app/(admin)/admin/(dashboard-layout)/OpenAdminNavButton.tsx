'use client'

import { adminSidebarOpen } from '@/app/(admin)/admin/(dashboard-layout)/AdminNav'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { useAtom } from 'jotai'
import React from 'react'

interface OpenAdminNavButtonProps {
   children?: React.ReactNode
}

export const OpenAdminNavButton: React.FC<OpenAdminNavButtonProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   const [, setSidebarOpen] = useAtom(adminSidebarOpen)
   
   return (
      <>
         <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
         >
            <span className="sr-only">Open sidebar</span>
            <BiMenu className="h-6 w-6" aria-hidden="true" />
         </button>
      </>
   )
   
}
