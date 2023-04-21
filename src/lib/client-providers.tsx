'use client'

import { clientSessionAtom } from '@/atoms/client-session.atom'
import { localeAtom } from '@/atoms/locale.atom'
import { currentUserAtom } from '@/atoms/user.atom'
import { User } from '@/graphql/users/types'
import { clientSession } from '@/lib/session'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useHydrateAtoms } from 'jotai/react/utils'
import { SessionProvider } from 'next-auth/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { SSRProvider } from 'react-aria'

const ToastProvider = dynamic(import('@ui/main/feedback/toast/Toast'), { ssr: false })

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

