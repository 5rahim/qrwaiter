'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { paginationItemStyles } from '@/hooks/use-live-pagination'
import { cn } from '@/lib/tailwind/tailwind-utils'
import Link from 'next/link'
import React from 'react'

interface LinkPaginationProps {
   children?: React.ReactNode
   api: any
   onChange?: () => void
   rootLink: string
}

const LinkPagination: React.FC<LinkPaginationProps> = (props) => {
   
   const { children, api, onChange, rootLink, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   return (
      <>
         <div className="flex flex-none overflow-x-auto w-full justify-start sm:justify-center">
            {api.totalPages > 1 && (
               <nav>
                  <ul className="flex justify-center gap-1 text-xs font-medium" {...api.rootProps}>
                     {api.pages.map((page: any, i: number) => {
                        if (page.type === "page")
                           return (
                              <li key={page.value}>
                                 <Link
                                    href={links.aware(rootLink) + `?page=${page.value}`}
                                    {...api.getPageTriggerProps(page)}
                                    className={cn(paginationItemStyles())}
                                    onClick={onChange}
                                 >
                                    {page.value}
                                 </Link>
                              </li>
                           )
                        else
                           return (
                              <li className="flex p-2 items-center" key={`ellipsis-${i}`}>
                                 <span {...api.getEllipsisProps({ index: i })}>&#8230;</span>
                              </li>
                           )
                     })}
                  </ul>
               </nav>
            )}
         </div>
      </>
   )
   
}

export default LinkPagination
