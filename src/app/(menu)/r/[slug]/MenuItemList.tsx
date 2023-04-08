'use client'

import { useCurrentRestaurant } from '@/atoms/restaurant.atom'
import { useHomePageItems } from '@/graphql/services/item.client'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import React from 'react'

interface MenuItemListProps {
   children?: React.ReactNode
}

export const MenuItemList: React.FC<MenuItemListProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   const { restaurant } = useCurrentRestaurant()
   
   const { list, listLoading } = useHomePageItems(restaurant?.id)
   
   if (listLoading) return <LoadingSpinner />
   
   return (
      <>
         <div className="space-y-4">
            {list.map((category) => (
               <section key={category.id} aria-labelledby={`${category.name}-category`}>
                  
                  <div className="max-w-xl">
                     <h1 className="text-2xl font-bold tracking-tight text-gray-900">{category.name}</h1>
                  </div>
                  
                  <div className="mt-4 flow-root divide-y divide-gray-200 border-t border-gray-200">
                     {category.items.map((item) => (
                        <div key={item.id} className="py-4 sm:flex">
                           <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                              <img
                                 src={item.imageSrc}
                                 alt={item.description ?? ''}
                                 className="h-24 w-24 flex-none rounded-md object-cover object-center sm:h-24 sm:w-24"
                              />
                              <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                 <h3 className="text-md font-semibold text-gray-900">
                                    <p>{item.name}</p>
                                 </h3>
                                 <p className="truncate text-sm text-gray-500">
                                    <span>{item.description}</span>
                                 </p>
                                 <p className="mt-1 font-bold text-gray-900">{item.price}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>
            ))}
         </div>
      </>
   )
   
}
