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
      menu: {
         href: '/r/[slug]',
      },
   },
   admin: {
      home: {
         href: '/admin',
      },
      allOrders: {
         href: '/admin/all-orders',
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
      tableOrder: {
         href: '/admin/table-order/[toid]',
      },
      customization: {
         href: '/admin/customization',
      },
   },
} satisfies Routes

export type SiteLinks = typeof siteLinks
