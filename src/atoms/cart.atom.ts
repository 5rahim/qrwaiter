'use client'

import { ItemSelection } from '@/app/(menu)/r/[slug]/table/[toid_chair]/TableItemList'
import { useCurrentTableOrder } from '@/atoms/table-order.atom'
import { Item, ItemVariation, MenuItem } from '@/graphql/types'
import { Nullable } from '@/types'
import { _insertObject, _removeObjectById, _selectObjectById, _updateObjectById } from '@/utils/arrays'
import { _isEmpty } from '@/utils/common'
import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import _ from 'lodash'
import { useCallback, useEffect } from 'react'
import toast from 'react-hot-toast'

export interface CartItem {
   id: string,
   item: MenuItem,
   selection: ItemSelection
}

export type OrderCart = CartItem[]

export const orderCartAtom = withImmer(atom<OrderCart>([]))


export const useOrderCart = (onCurrentCartLoaded?: (cart: OrderCart) => void) => {
   
   const { tableOrder } = useCurrentTableOrder()
   
   const [cart, setCart] = useAtom(orderCartAtom)
   
   useEffect(() => {
      if (cart.length === 0 && typeof window !== 'undefined' && localStorage) {
         const currentCart = localStorage?.getItem(`qrwaiter-cart-${tableOrder?.id}`)
         if (currentCart) {
            setCart(JSON.parse(currentCart))
            if (onCurrentCartLoaded) {
               onCurrentCartLoaded(JSON.parse(currentCart))
            }
         } else {
            localStorage.setItem(`qrwaiter-cart-${tableOrder?.id}`, "[]")
         }
      }
   }, [])
   
   useEffect(() => {
      if (!_isEmpty(cart)) localStorage.setItem(`qrwaiter-cart-${tableOrder?.id}`, JSON.stringify(cart))
   }, [cart])
   
   return {
      addItem: useCallback((item: MenuItem, params: ItemSelection) => {
         if (item) {
            const existingItem = _selectObjectById<CartItem>(item.id)(cart)
            // Check to see if item is already in the cart
            if (_isEmpty(existingItem)) {
               // Add
               toast.success('Item added')
               setCart(_insertObject<CartItem>({ id: item.id, item, selection: params })(cart))
            } else {
               // Update
               toast.success('Item updated')
               setCart(_updateObjectById<CartItem>(item.id, 'selection', params)(cart))
            }
         }
      }, [cart]),
      
      /**
       * Get an item from the cart
       * Used to populate field in item overview
       */
      getItem: (itemId: Nullable<string>) => {
         // Get the item that is already in
         return _selectObjectById<CartItem>(itemId)(cart)
      },
      getItemCount: () => {
         return cart.length
      },
      removeItem: (itemId: Nullable<string>) => {
         // Get the item that is already in
         toast.success('Item removed')
         setCart(_removeObjectById<CartItem>(itemId)(cart))
      },
      updateItemQuantity: (itemId: Nullable<string>, quantity: number) => {
         if (itemId) {
            const existingItem = _selectObjectById<CartItem>(itemId)(cart)
            toast.success('Cart updated')
            setCart(_updateObjectById<CartItem>(itemId, 'selection', { ...existingItem?.selection, quantity })(cart))
         }
      },
      updateItem: (itemId: Nullable<string>, selection: ItemSelection) => {
         if (itemId) {
            // const existingItem = _selectObjectById<CartItem>(itemId)(cart)
            toast.success('Item updated')
            setCart(_updateObjectById<CartItem>(itemId, 'selection', selection)(cart))
         }
      },
      getSubtotal: () => {
         let total = 0
         cart?.map(cartItem => {
            total += calculateItemPrice(cartItem.item, cartItem.selection)
         })
         return total
      },
      getItemPrice: (id: Nullable<string>) => {
         let total = 0
         cart?.filter(i => i.id === id).map(cartItem => {
            total += calculateItemPrice(cartItem.item, cartItem.selection)
         })
         return total
      },
      getItems: () => {
         return cart
      },
      emptyCart: () => {
         setCart([])
         localStorage.setItem(`qrwaiter-cart-${tableOrder?.id}`, "[]")
      },
   }
   
}

function calculateItemPrice(item: Item, selection: ItemSelection) {
   if (!item) return 0
   if(!selection) return item.price
   let total = item.price
   let additionalAmount = 0
   // Go through each selected variation -> { id: '', selected: [] }
   selection?.variations.map(selection => {
      // Find the variation from the item
      const variation: ItemVariation = _.find(item.variations, n => n.id === selection.id)
      // Go through selected variation options
      selection.selected.map(optionId => {
         const option = _.find(variation.options, n => n.id === optionId)
         if (option) {
            additionalAmount += option.price
         }
      })
   })
   total += additionalAmount
   return total
}
