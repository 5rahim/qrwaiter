'use client'

import { useCurrentLocale } from '@/atoms/locale.atom'
import { useQueryClient } from '@/graphql/use-query-client'
import { clientSession } from '@/lib/session'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastProvider } from '@ui/main/feedback/toast/Toast'
import { SessionProvider } from 'next-auth/react'
import React, { useEffect } from 'react'
import { SSRProvider } from 'react-aria'

interface ClientProvidersProps {
   children?: React.ReactNode
   user: clientSession
   locale: string
}

const ClientProviders: React.FC<ClientProvidersProps> = (props) => {
   
   const { children, user, locale } = props
   
   const { setLocale } = useCurrentLocale()
   
   setLocale(locale)
   
   return (
      <>
         <SSRProvider>
            <AuthProvider user={user}>
               <QueryProvider>
                  {children}
                  <ToastProvider />
               </QueryProvider>
            </AuthProvider>
         </SSRProvider>
      </>
   )
   
}

export default ClientProviders

const queryClient = new QueryClient()

export function QueryProvider({ children }: { children: React.ReactNode }) {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}


export function AuthProvider({ children, user }: { children: React.ReactNode, user: clientSession | null }) {
   
   const queryClient = useQueryClient()
   
   /**
    * Set the client session from the server before next-auth loads it in the client for use in queries
    * Will throw these errors in development: "Warning: Cannot update a component"
    * Can cause hydration issues if used to display information in UI.
    */
   useEffect(() => {
      queryClient.setClientSession(user)
   }, [user])
   
   return <SessionProvider>{children}</SessionProvider>
}
