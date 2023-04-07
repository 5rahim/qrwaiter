import { EditItemPage } from '@/app/(admin)/admin/menu/items/[iid]/EditItemPage'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page({ params: { iid } }: { params: { iid: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         <EditItemPage iid={iid} />
      </>
   )
}
