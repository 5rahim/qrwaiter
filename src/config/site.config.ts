import { clientEnv } from '@/env/schema.mjs'
import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
   name: "QR Waiter",
   description: "Real-time ordering system for restaurants.",
   baseUrl: clientEnv.NEXT_PUBLIC_BASE_URL!,
   domain: clientEnv.NEXT_PUBLIC_BASE_DOMAIN!,
   /**
    * If you disable i18n, remove routes from [lng] directory
    */
   i18n: false,
   protectedPages: ["/ws", "/csr", "/ssr", "/dashboard", "/login", "/register", "/new"],
}
