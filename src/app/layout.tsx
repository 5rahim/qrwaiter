// import { DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables } from '@/graphql/generated'
import { User } from '@/graphql/users/types'
import ClientProviders from '@/lib/client-providers'
import { getCurrentSessionUser } from '@/lib/session'
import "@/styles/globals.css"
import { cn } from '@/lib/tailwind/tailwind-utils'
import { Nullable } from '@/types'
import { Inter as FontSans } from "@next/font/google"
import React from 'react'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'

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
      // const getUser = await useServerQuery<DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables>(GetUserById, { id: user_id })
      // return getUser?.users_by_pk
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
   
   return (
      <html
         className={cn(
            "bg-white font-sans text-gray-900 antialiased",
            fontSans.variable,
         )}
      >
      <head />
      <body>
      <ClientProviders user={sessionUser} locale="en">
         {children}
      </ClientProviders>
      </body>
      </html>
   )
}

export const dynamic = 'force-dynamic'
