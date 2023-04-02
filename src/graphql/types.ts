import {
   DB_GetCategoriesQuery, DB_GetCategoryQuery, DB_GetHomePageCategoriesQuery, DB_GetItemQuery, DB_GetItemsQuery, DB_GetOrderQuery,
   DB_GetRestaurantBySlugQuery, DB_GetTableInfoQuery, DB_GetTableOrderQuery, DB_GetTableOrdersQuery, DB_GetTableQuery, DB_GetTablesQuery,
} from '@/graphql/generated'

export type ItemSelection = {
   id: string
   item_snapshot: Item
   quantity: number
   instructions: string | null
   choice_selections: ItemChoice[]
   variation_selections: ItemVariation[]
}
export type ItemChoice = {
   id: string
   name: string
   choiceOptions: ItemChoiceOption[]
   type: 'single' | 'multiple'
   available: boolean
}

export type ItemChoiceOption = {
   id: string
   value: string
   available: boolean
}

export type ItemVariation = {
   id: string
   name: string
   type: 'single' | 'multiple'
   variationOptions: ItemVariationOption[]
   available: boolean
}

export type ItemVariationOption = {
   id: string
   name: string
   price: number
   available: boolean
}

export type Category = DB_GetCategoryQuery['categories_by_pk']
export type Categories = DB_GetCategoriesQuery['categories']
/**
 * Contains: Items
 */
export type HomePageCategories = DB_GetHomePageCategoriesQuery['categories']

//

export type Items = DB_GetItemsQuery['items']
export type Item = DB_GetItemQuery['items_by_pk']

//


export type Order = DB_GetOrderQuery['orders_by_pk']

//

export type Restaurant = DB_GetRestaurantBySlugQuery['restaurants'][0]

//

/**
 * Contains: Orders, Table
 */
export type TableOrder = DB_GetTableOrderQuery['table_orders_by_pk']
/**
 * Does not contain Orders and Table
 */
export type TableOrders = DB_GetTableOrdersQuery['table_orders']

//

export type Tables = DB_GetTablesQuery['tables']
export type TableInfo = DB_GetTableInfoQuery['tables_by_pk']
/**
 * Contains: Table_Orders -> Orders
 */
export type Table = DB_GetTableQuery['tables_by_pk']
