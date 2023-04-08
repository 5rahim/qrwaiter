'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { siteLinkTo } from '@/utils/links'
import { BiDish } from '@react-icons/all-files/bi/BiDish'
import { BiReceipt } from '@react-icons/all-files/bi/BiReceipt'
import { LinkTabs } from '@ui/main/navigation/tabs/LinkTabs'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

interface MenuNavbarProps {
   children?: React.ReactNode
}

const MenuNavbar: React.FC<MenuNavbarProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   const pathname = usePathname()
   
   const navigation = useMemo(() => [
      {
         name: 'Current orders', href: siteLinkTo(s => s.admin.home), icon: BiDish,
         isSelected: links.awarePathIsSelected(links.to(s => s.admin.home)) ?? false,
      },
      {
         name: 'All orders', href: siteLinkTo(s => s.admin.allOrders), icon: BiReceipt,
         isSelected: pathname?.includes(links.to(s => s.admin.allOrders)) ?? false,
      },
   ], [pathname])
   
   return (
      <>
         <LinkTabs tabs={navigation} />
      </>
   )
   
}

export default MenuNavbar
