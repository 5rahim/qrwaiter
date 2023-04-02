import { GetCategory } from '@/graphql/actions/categories'
import { DB_GetCategoryQuery, DB_GetCategoryQueryVariables } from '@/graphql/generated'
import { Category } from '@/graphql/types'
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
