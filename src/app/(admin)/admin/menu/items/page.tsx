import ItemList from '@/app/(admin)/admin/menu/items/ItemList'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      <>
         <ItemList rid={restaurant?.id} />
      </>
   )
}
