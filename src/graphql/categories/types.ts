import { DB_GetCategoriesQuery, DB_GetCategoryQuery, DB_GetHomePageCategoriesQuery } from '@/graphql/generated'

export type Category = DB_GetCategoryQuery['categories_by_pk']

export type Categories = DB_GetCategoriesQuery['categories']

/**
 * Contains: Items
 */
export type HomePageCategories = DB_GetHomePageCategoriesQuery['categories']
