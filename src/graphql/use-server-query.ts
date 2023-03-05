import { getClient } from '@/lib/graphql-clients'
import { getCurrentSessionUser } from '@/lib/session'

export async function useServerQuery<TData, TVariables = undefined>(query: string, variables?: TVariables) {
   
   try {
      const sessionUser = await getCurrentSessionUser()
      console.log('fetching data', variables)
      return await getClient(sessionUser?.token).request(query, variables) as TData
   }
   catch (e) {
      console.error(e) //TODO: Manage error thrown in server
      return null
      // throw new Error(`An error has occurred while trying to fetch data`)
   }
   
}
