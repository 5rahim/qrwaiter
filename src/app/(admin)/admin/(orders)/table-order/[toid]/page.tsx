import { getCurrentSessionUser } from '@/lib/session'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         New Page
      </>
   )
}
