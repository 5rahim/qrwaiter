import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export type clientSession =
   ({ id: string } & { name?: string | null | undefined, email?: string | null | undefined, image?: string | null | undefined, token?: string | null })
   | undefined

export async function getSession() {
   return await getServerSession(authOptions)
}

export async function getCurrentSessionUser() {
   const session: any = await getSession()
   
   return session?.user as clientSession
}
