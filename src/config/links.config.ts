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
      items: {
         href: '/admin/menu/items',
      },
      createItem: {
         href: '/admin/menu/items/create',
      },
      editItem: {
         href: '/admin/menu/items/[iid]',
      },
      categories: {
         href: '/admin/menu/categories',
      },
      tables: {
         href: '/admin/tables',
      },
      customization: {
         href: '/admin/customization',
      },
   },
} satisfies Routes

export type SiteLinks = typeof siteLinks
