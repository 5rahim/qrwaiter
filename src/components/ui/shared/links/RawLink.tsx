'use client'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { useContext } from 'react'

export interface RawLinkProps
   extends Omit<NextLinkProps, 'as' | 'href' | 'onClick' | 'onMouseEnter'> {
   href: string
   as?: string
   children?: React.ReactNode
   className?: string
}

const RawLink: React.FC<RawLinkProps> = (
   { children, ...props }) => {
   return (
      <NextLink
         className="block"
         {...props}
      >
         {children}
      </NextLink>
   )
}

export default RawLink
