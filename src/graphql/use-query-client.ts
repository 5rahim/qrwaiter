import { clientSessionAtom } from '@/atoms/client-session.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { getClient } from '@/lib/graphql-clients'
import { useAtom } from 'jotai'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useQueryClient = () => {
   
   const [clientSession, setClientSession] = useAtom(clientSessionAtom)
   
   const client = useMemo(() => getClient(clientSession?.token), [clientSession])
   
   const t = useAppTranslation(['alerts'])
   
   return {
      clientSession,
      setClientSession,
      get: () => {
         return client
      },
      successAlert: (successMessage?: string) => {
         toast.remove()
         let title: string = 'Success'
         
         if (successMessage) {
            title = successMessage
         }
         
         toast.success(title)
         
      },
      errorAlert: (errorMessage?: string) => {
      
         let title: string = 'An error occurred'
      
         if (errorMessage) {
            title = errorMessage
         }
      
         toast.error(title)
      
      },
   }
   
}
