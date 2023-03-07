import { getCurrentSessionUser } from '@/lib/session'


export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         Create table order
         See current orders
      </>
   )
}
