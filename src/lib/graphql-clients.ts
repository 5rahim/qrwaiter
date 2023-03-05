import { clientEnv } from '@/env/schema.mjs'
import { GraphQLClient } from "graphql-request"
import { createClient } from 'graphql-ws'
// import WebSocket from 'ws'

export const getClient = (accessToken?: string | null | undefined) => {
   
   return new GraphQLClient(clientEnv.NEXT_PUBLIC_HASURA_GRAPHQL_API!, {
      // @ts-ignore
      headers: accessToken ? {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         Authorization: accessToken ? `Bearer ${accessToken}` : null,
      } : {},
      cache: "no-cache",
   })
}


export const getWSClient = (accessToken?: string | null | undefined) => {
   
   if (typeof window !== undefined) {
      return createClient({
         // webSocketImpl: WebSocket,
         url: clientEnv.NEXT_PUBLIC_HASURA_WS_GRAPHQL_API!,
         connectionParams: {
            headers: accessToken ? {
               Authorization: accessToken ? `Bearer ${accessToken}` : null,
            } : {},
         },
      })
   }
   
   return null
   
}
