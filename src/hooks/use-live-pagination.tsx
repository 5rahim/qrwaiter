'use client'

import { useLinks } from '@/hooks/use-links'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { BiChevronLeft } from '@react-icons/all-files/bi/BiChevronLeft'
import { BiChevronRight } from '@react-icons/all-files/bi/BiChevronRight'
import * as pagination from '@zag-js/pagination'
import { normalizeProps, useMachine } from '@zag-js/react'
import { cva } from 'class-variance-authority'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useId, useState } from 'react'

export const paginationItemStyles = cva(
   cn("inline-flex h-10 w-10 items-center justify-center rounded border border-gray-200 cursor-pointer hover:bg-gray-50 select-none",
      "data-selected:bg-brand-500 data-selected:border-brand-500 data-selected:text-white data-selected:hover:bg-brand-500",
      "data-disabled:opacity-50 data-disabled:pointer-events-none"),
)

/**
 * Pagination using subscriptions
 * @param data
 * @param isLoading
 * @param options
 */
export function useLivePagination<T extends { [key: string]: any }>
(
   data: T | null | undefined,
   isLoading: boolean,
   options: { limit: number, rootLink: string, stopPageResettingBug: boolean } = { limit: 1, rootLink: '', stopPageResettingBug: false },
) {
   
   const _id = useId()
   const router = useRouter()
   const links = useLinks()
   const searchParams = useSearchParams()
   const currentPage = !!searchParams?.get('page') ? parseInt(searchParams.get('page')!) : 1
   
   const { limit, rootLink, stopPageResettingBug } = options
   const [trimmedData, setTrimmedData] = useState<T>([] as any)
   
   const [state, send] = useMachine(
      pagination.machine({
         id: _id,
         count: 0,
         pageSize: limit,
         /** When the user changes the page, update the url **/
         onChange: details => {
            router.replace(links.aware(rootLink + `?page=${details.page}`))
         },
      }),
   )
   const api = pagination.connect(state, send, normalizeProps)
   
   /**
    * When subscription data changes
    * This fires first when the initial data is fetched
    **/
   useEffect(() => {
      /** Set/Update the count **/
      api.setCount(data?.length ?? 0)
      /**
       * Do no change page when filter options are empty
       * Without this the pagination will reset when changing the state of filtering options
       * stopPageResettingBug: searchValue !== '' || filterOption !== '' -> Do not reset when searchValue === '' && filterOption === ''
       */
      if (!stopPageResettingBug) { // Do not change page when
         api.setPage(currentPage) // This fires the "onChange" function of the machine
      }
   }, [data])
   
   useEffect(() => { // Slice data
      if (!isLoading) {
         setTrimmedData(data?.slice(api.pageRange.start, api.pageRange.end) ?? [])
      }
   }, [data, api.page])
   
   return {
      api, // Return api so we can implement our own paginator
      trimmedData,
      goToFirstPage: () => api.setPage(1),
      paginator: () => (
         <div className="flex flex-none overflow-x-auto w-full justify-start sm:justify-center">
            {api.totalPages > 1 && (
               <nav>
                  <ul className="flex justify-center gap-1 text-xs font-medium" {...api.rootProps}>
                     <li>
                        <div className={cn(paginationItemStyles(), "text-lg")}  {...api.prevPageTriggerProps}>
                           <BiChevronLeft />
                        </div>
                     </li>
                     {api.pages.map((page, i) => {
                        if (page.type === "page")
                           return (
                              <li key={page.value}>
                                 <div{...api.getPageTriggerProps(page)} className={cn(paginationItemStyles())}>
                                    {page.value}
                                 </div>
                              </li>
                           )
                        else
                           return (
                              <li className="flex p-2 items-center" key={`ellipsis-${i}`}>
                                 <span {...api.getEllipsisProps({ index: i })}>&#8230;</span>
                              </li>
                           )
                     })}
                     <li>
                        <div className={cn(paginationItemStyles(), "text-lg")}  {...api.nextPageTriggerProps}>
                           <BiChevronRight />
                        </div>
                     </li>
                  </ul>
               </nav>
            )}
         </div>
      ),
   }
   
}
