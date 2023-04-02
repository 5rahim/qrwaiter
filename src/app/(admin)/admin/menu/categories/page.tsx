import CategoryList from '@/app/(admin)/admin/menu/categories/CategoryList'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      <>
         <CategoryList rid={restaurant?.id} />
      </>
   )
}
