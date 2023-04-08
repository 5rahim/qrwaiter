import { Restaurant } from '@/graphql/types'
import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const restaurantAtom = withImmer(atom<Restaurant | undefined>(undefined))

export const useCurrentRestaurant = () => {
   
   const [restaurant, setRestaurant] = useAtom(restaurantAtom)
   
   return {
      restaurant,
      setRestaurant,
   }
   
}

export const tableAtom = withImmer(atom<Restaurant | undefined>(undefined))
