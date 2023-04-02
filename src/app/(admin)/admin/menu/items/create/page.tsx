import ItemForm from '@/app/(admin)/admin/menu/items/ItemForm'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { BiLeftArrowAlt } from '@react-icons/all-files/bi/BiLeftArrowAlt'
import LinkButton from '@ui/main/forms/button/LinkButton'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   return (
      <>
         <LinkButton to={siteLinkTo(s => s.admin.items)} leftIcon={<BiLeftArrowAlt />} size="md" intent="gray-basic">Back</LinkButton>
         
         <ItemForm role="create" rid={restaurant?.id} />
      </>
   )
}
