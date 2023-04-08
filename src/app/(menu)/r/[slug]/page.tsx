import { MenuItemList } from '@/app/(menu)/r/[slug]/MenuItemList'
import { getRestaurantByAdministratorId, getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal'
import LinkButton from '@ui/main/forms/button/LinkButton'
import { redirect } from 'next/navigation'

export default async function Page({ params: { lng, slug } }: { params: { lng: string, slug: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const [restaurantByOwner, restaurantByAdministrator] = await Promise.all([
      getRestaurantByOwnerId(sessionUser?.id),
      getRestaurantByAdministratorId(sessionUser?.id),
   ])
   
   const restaurant = (restaurantByOwner ?? restaurantByAdministrator)!
   
   if (!restaurant) {
      redirect(siteLinkTo(s => s.admin.home))
   }
   
   return (
      <>
         <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8 bg-gray-100 flex items-center justify-between">
            <p className="text-xl font-bold">{restaurant?.name}</p>
            <LinkButton size="sm" intent="primary-basic" rightIcon={<BiLinkExternal />} to={siteLinkTo(s => s.admin.home)}>Admin</LinkButton>
         </div>
         <main className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
            <MenuItemList />
         </main>
      </>
   )
}
