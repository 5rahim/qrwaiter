'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import React from 'react'

interface FloatingCartProps {
   children?: React.ReactNode
}

export const FloatingCart: React.FC<FloatingCartProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   return (
      <>
         <div className="fixed bottom-8 left-0 right-0 px-4 max-w-3xl z-10">
            <div className="w-full h-16 rounded-full bg-black text-white flex items-center p-2 shadow-xl justify-center">
               FloatingCart
            </div>
         </div>
      </>
   )
   
}
