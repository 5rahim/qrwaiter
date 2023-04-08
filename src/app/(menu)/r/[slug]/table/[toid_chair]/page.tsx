import { TableItemList } from '@/app/(menu)/r/[slug]/table/[toid_chair]/TableItemList'
import { getRestaurantBySlug } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page({ params: { lng, slug, tid_chair } }: { params: { lng: string, slug: string, tid_chair: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantBySlug(slug)
   
   return (
      <>
         <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8 bg-gray-50 border-b flex items-center justify-between">
            <p className="text-xl font-bold">{restaurant?.name}</p>
         </div>
         <main className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
            <TableItemList />
         </main>
      </>
   )
}
