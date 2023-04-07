// import { DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables } from '@/graphql/generated'
import { siteConfig } from '@/config/site.config'
import { DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables } from '@/graphql/generated'
import { useServerQuery } from '@/graphql/use-server-query'
import { GetUserById } from '@/graphql/users/actions/users'
import { User } from '@/graphql/users/types'
import ClientProviders from '@/lib/client-providers'
import { getCurrentSessionUser } from '@/lib/session'
import { cn } from '@/lib/tailwind/tailwind-utils'
import "@/styles/globals.css"
import { Nullable } from '@/types'
import { Inter as FontSans } from "@next/font/google"
import { Metadata } from 'next'
import React from 'react'

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-inter",
})

export const metadata: Metadata = {
   title: siteConfig.name,
   description: siteConfig.description,
   viewport: "width=device-width, user-scalable=no",
   openGraph: {
      type: "website",
      title: siteConfig.name,
      siteName: siteConfig.name,
      url: siteConfig.baseUrl,
   },
}

export async function getUser(user_id: Nullable<string>): Promise<User> {
   
   if (!user_id) return null
   
   try {
      // TODO: Remove after generating
      const getUser = await useServerQuery<DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables>(GetUserById, { id: user_id })
      return getUser?.users_by_pk
   }
   catch (e) {
      return null
   }
}

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const user = await getUser(sessionUser?.id)
   
   return (
      <html
         className={cn(
            "h-full font-sans text-gray-900 antialiased",
            fontSans.variable,
         )}
      >
      <head />
      <body className="h-full">
      <ClientProviders user={user} sessionUser={sessionUser} locale="en">
         {children}
      </ClientProviders>
      </body>
      </html>
   )
}

export const dynamic = 'force-dynamic'
