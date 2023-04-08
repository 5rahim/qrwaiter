import { TableItemList } from '@/app/(menu)/r/[slug]/table/[tid_chair]/TableItemList'
import { getRestaurantBySlug } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { cookies } from 'next/headers'


export default async function Page({ params: { lng, slug, tid_chair } }: { params: { lng: string, slug: string, tid_chair: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantBySlug(slug)
   
   const cookieStore = cookies()
   const theme = cookieStore.get('theme')
   
   return (
      <>
         <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8 bg-gray-100 flex items-center justify-between">
            <p className="text-xl font-bold">{restaurant?.name}</p>
         </div>
         <main className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
            <TableItemList />
         </main>
      </>
   )
}
