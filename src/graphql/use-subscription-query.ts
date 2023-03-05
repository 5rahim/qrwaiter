import { useQueryClient } from '@/graphql/use-query-client'
import { getWSClient } from '@/lib/graphql-clients'
import { useEffect, useState } from 'react'

export const useSubscriptionQuery = <TData, TVariables = undefined>(document: string, options?: { variables?: TVariables }) => {
   const { variables } = options ?? {}
   
   const { clientSession } = useQueryClient()
   
   
   const [data, setData] = useState<TData | null>(null)
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const [isError, setIsError] = useState<boolean>(false)
   
   useEffect(() => {
      let unsubscribe: (() => void) | undefined
      setIsLoading(true)
      try {
         const wsClient = getWSClient(clientSession?.token)
         
         unsubscribe = wsClient?.subscribe(
            {
               query: document,
               variables: variables ?? undefined,
            },
            {
               next: ({ data }) => {
                  // console.log('Subscribing', document.slice(0, 10))
                  setData(data ? data as TData : null)
                  setIsLoading(false)
                  setIsError(false)
               },
               error: (error) => {
                  setIsError(true)
                  // console.log(error)
                  // throw new Error(`An error occurred`)
               },
               complete: () => {
                  // console.log('Unsubscribing', document.slice(0, 10))
               },
            },
         )
      }
      catch (e) {
         unsubscribe && unsubscribe()
      }
      return () => {
         unsubscribe && unsubscribe()
      }
   }, [])
   
   return {
      data: data as TData | null,
      isLoading,
      isError,
   }
   
}
