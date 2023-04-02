import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import { getCurrentSessionUser } from '@/lib/session'


export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         {/*// @ts-ignore*/}
         <DashboardShell title="Dashboard">
            Create table order
            See current orders
         </DashboardShell>
      </>
   )
}
