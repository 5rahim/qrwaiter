import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import TableList from '@/app/(admin)/admin/tables/TableList'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      // @ts-ignore
      <DashboardShell title="Tables">
         <TableList rid={restaurant?.id} />
      </DashboardShell>
   )
}
