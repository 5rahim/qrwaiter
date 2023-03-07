import { Item } from '@/graphql/items/types'

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
   name: string
   available: boolean
}

export type ItemVariation = {
   id: string
   name: string
   variationOptions: ItemVariationOption[]
   available: boolean
}

export type ItemVariationOption = {
   id: string
   name: string
   price: number
   available: boolean
}
