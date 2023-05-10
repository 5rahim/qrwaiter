// import { DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables } from '@/graphql/generated'import { Inter as FontSans } from "@next/font/google"
import React from 'react'

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   
   return (
      <html>
      <head />
      <body className="h-full">
      {children}
      </body>
      </html>
   )
}

export const dynamic = 'force-dynamic'
