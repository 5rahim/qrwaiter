// import { DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables } from '@/graphql/generated'
import { siteConfig } from '@/config/site.config'
import { cn } from '@/lib/tailwind/tailwind-utils'
import "@/styles/globals.css"
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
export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   
   return (
      <html
         className={cn(
            "h-full font-sans text-gray-900 antialiased",
            fontSans.variable,
         )}
      >
      <head />
      <body className="h-full">
      {children}
      </body>
      </html>
   )
}

export const dynamic = 'force-dynamic'
