import ItemForm from '@/app/(admin)/admin/menu/items/ItemForm'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      <>
         <ItemForm role="create" rid={restaurant?.id} />
      </>
   )
}
