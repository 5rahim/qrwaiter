import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import { EditItemPage } from '@/app/(admin)/admin/menu/items/[iid]/EditItemPage'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'

export default async function Page({ params: { iid } }: { params: { iid: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         {/*@ts-ignore*/}
         <DashboardShell title="Edit an item" backTo={siteLinkTo(s => s.admin.items)}>
            <EditItemPage iid={iid} />
         </DashboardShell>
      </>
   )
}
