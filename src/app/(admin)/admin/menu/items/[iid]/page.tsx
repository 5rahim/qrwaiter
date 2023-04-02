import { getCurrentSessionUser } from '@/lib/session'
import { BiArrowToLeft } from '@react-icons/all-files/bi/BiArrowToLeft'
import { Button } from '@ui/main/forms/button/Button'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   return (
      <>
         <Button leftIcon={<BiArrowToLeft />}>Back</Button>
      </>
   )
}
