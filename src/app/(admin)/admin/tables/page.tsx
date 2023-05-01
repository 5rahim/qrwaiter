import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import TableList from '@/app/(admin)/admin/tables/TableList'
import { getRestaurantByOwnerId, getRestaurantInAdmin } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantInAdmin(sessionUser?.id)
   
   return (
      // @ts-ignore
      <DashboardShell title="">
         <TableList rid={restaurant?.id} />
      </DashboardShell>
   )
}
