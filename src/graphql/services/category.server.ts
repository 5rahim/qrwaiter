import { GetCategory } from '@/graphql/categories/actions'
import { Category } from '@/graphql/categories/types'
import { DB_GetCategoryQuery, DB_GetCategoryQueryVariables } from '@/graphql/generated'
import { useServerQuery } from '@/graphql/use-server-query'
import { Nullable } from '@/types'
import { cache } from "react"

export const getCategory = cache(async (id: Nullable<string>): Promise<Category | null> => {
   
   if (id) {
      const res = await useServerQuery<DB_GetCategoryQuery, DB_GetCategoryQueryVariables>(GetCategory, { id })
      return res?.categories_by_pk ?? null
   }
   
   return null
   
})
