'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { siteLinkTo } from '@/utils/links'
import { BiBookOpen } from '@react-icons/all-files/bi/BiBookOpen'
import { BiPaintRoll } from '@react-icons/all-files/bi/BiPaintRoll'
import { BiReceipt } from '@react-icons/all-files/bi/BiReceipt'
import { GiRoundTable } from '@react-icons/all-files/gi/GiRoundTable'
import RawLink from '@ui/shared/links/RawLink'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

interface SidebarMenuProps {
   children?: React.ReactNode
}

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const pathname = usePathname()
   const t = useAppTranslation()
   
   const navigation = useMemo(() => [
      { name: 'Orders', href: siteLinkTo(s => s.admin.home), icon: BiReceipt, current: links.awarePathIsSelected(links.to(s => s.admin.home)) },
      { name: 'Menu', href: siteLinkTo(s => s.admin.menu), icon: BiBookOpen, current: links.awarePathIsSelected(links.to(s => s.admin.menu)) },
      {
         name: 'Tables', href: siteLinkTo(s => s.admin.tables), icon: GiRoundTable, current: links.awarePathIsSelected(links.to(s => s.admin.tables)),
      },
      {
         name: 'Customization', href: siteLinkTo(s => s.admin.customization), icon: BiPaintRoll,
         current: links.awarePathIsSelected(links.to(s => s.admin.customization)),
      },
   ], [pathname])
   
   return (
      <>
         <div className="space-y-2">
            {navigation.map((item) => (
               <RawLink
                  key={item.name}
                  href={item.href}
                  className={cn(
                     item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                     'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  )}
                  aria-current={item.current ? 'page' : undefined}
               >
                  <item.icon
                     className={cn(
                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6',
                     )}
                     aria-hidden="true"
                  />
                  {item.name}
               </RawLink>
            ))}
         </div>
      </>
   )
   
}

export default SidebarMenu
