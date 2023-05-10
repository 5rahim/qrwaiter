import { useTranslation } from '@/app/i18n'
import { getCurrentSessionUser } from '@/lib/session'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
   
   return (
      <>
         Webapp is dormant
      </>
   )
}
