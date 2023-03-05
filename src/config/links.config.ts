import { IconType } from '@react-icons/all-files'

export type SiteRoute = { href: string, title?: string, icon?: IconType, disabled?: boolean }
type MainRoutes = Record<string, SiteRoute>
type Routes = Record<string, MainRoutes>

export const siteLinks = {
   main: {
      home: {
         href: `/`,
      },
   },
} satisfies Routes

export type SiteLinks = typeof siteLinks
