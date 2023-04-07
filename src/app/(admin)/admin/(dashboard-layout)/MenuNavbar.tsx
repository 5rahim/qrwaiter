'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { siteLinkTo } from '@/utils/links'
import { BiBookOpen } from '@react-icons/all-files/bi/BiBookOpen'
import { BiFoodMenu } from '@react-icons/all-files/bi/BiFoodMenu'
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
         name: 'Items', href: siteLinkTo(s => s.admin.items), icon: BiFoodMenu, isSelected: pathname?.includes(links.to(s => s.admin.items)) ?? false,
      },
      {
         name: 'Categories', href: siteLinkTo(s => s.admin.categories), icon: BiBookOpen,
         isSelected: pathname?.includes(links.to(s => s.admin.categories)) ?? false,
      },
   ], [pathname])
   
   return (
      <>
         <LinkTabs tabs={navigation} />
      </>
   )
   
}

export default MenuNavbar
