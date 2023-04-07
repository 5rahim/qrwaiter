import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import ItemForm from '@/app/(admin)/admin/menu/items/ItemForm'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      <>
         {/*@ts-ignore*/}
         <DashboardShell title="Create an item" backTo={siteLinkTo(s => s.admin.items)}>
            <ItemForm role="create" rid={restaurant?.id} />
         </DashboardShell>
      </>
   )
}
