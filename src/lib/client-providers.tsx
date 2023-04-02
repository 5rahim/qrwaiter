'use client'

import { clientSessionAtom } from '@/atoms/client-session.atom'
import { localeAtom } from '@/atoms/locale.atom'
import { currentUserAtom } from '@/atoms/user.atom'
import { User } from '@/graphql/users/types'
import { clientSession } from '@/lib/session'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastProvider } from '@ui/main/feedback/toast/Toast'
import { useHydrateAtoms } from 'jotai/react/utils'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { SSRProvider } from 'react-aria'

interface ClientProvidersProps {
   children?: React.ReactNode
   sessionUser: clientSession
   user: User
   locale: string
}

const ClientProviders: React.FC<ClientProvidersProps> = (props) => {
   
   const { children, sessionUser, user, locale } = props
   
   useHydrateAtoms([[localeAtom, locale], [clientSessionAtom, sessionUser], [currentUserAtom, user]])
   
   return (
      <>
         <SSRProvider>
            <SessionProvider>
               <QueryProvider>
                  {children}
                  <ToastProvider />
               </QueryProvider>
            </SessionProvider>
         </SSRProvider>
      </>
   )
   
}

export default ClientProviders

const queryClient = new QueryClient()

export function QueryProvider({ children }: { children: React.ReactNode }) {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

