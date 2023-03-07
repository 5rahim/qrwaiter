import { IconType } from '@react-icons/all-files'

export type SiteRoute = { href: string, title?: string, icon?: IconType, disabled?: boolean }
type MainRoutes = Record<string, SiteRoute>
type Routes = Record<string, MainRoutes>

export const siteLinks = {
   main: {
      home: {
         href: `/`,
      },
      login: {
         href: '/login',
      },
      new: {
         href: `/new`,
      },
   },
   admin: {
      home: {
         href: '/admin',
      },
      menu: {
         href: '/admin/menu',
      },
      createItem: {
         href: '/admin/menu/create',
      },
      editItem: {
         href: '/admin/menu/[iid]/edit',
      },
      tables: {
         href: '/admin/tables',
      },
      createTable: {
         href: '/admin/tables/create',
      },
      editTable: {
         href: '/admin/tables/[tid]/edit',
      },
      customization: {
         href: '/admin/customization',
      },
   },
} satisfies Routes

export type SiteLinks = typeof siteLinks
