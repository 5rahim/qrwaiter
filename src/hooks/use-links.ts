import { useCurrentLocale } from '@/atoms/locale.atom'
import { SiteLinks, siteLinks, SiteRoute } from '@/config/links.config'
import { usePathname, useSearchParams } from 'next/navigation'

export const useLinks = () => {
   
   const { locale } = useCurrentLocale()
   const currentPath = usePathname()
   const segments = useSearchParams()
   
   return {
      href: (path: string) => {
         return `/${locale}${path}`
      },
      to: (callback: (links: SiteLinks) => SiteRoute, ...parameters: { key: string, value: string }[]) => {
         let returnLink = `/${locale}` + callback(siteLinks).href
         
         if (parameters) {
            for (const parameter of parameters) {
               returnLink = returnLink.replaceAll(`[${parameter.key}]`, parameter.value)
            }
         }
         
         return returnLink
      },
      toHref: (href: string, ...parameters: { key: string, value: string }[]) => {
         let returnLink = `/${locale}` + href
         
         if (parameters) {
            for (const parameter of parameters) {
               returnLink = returnLink.replaceAll(`[${parameter.key}]`, parameter.value)
            }
         }
         
         return returnLink
      },
      aware: (path: string): string => {
         let currentPathWithActualValues = path
         const arrayPath = path.split('/') as string[]
         const arrayCurrentPath = currentPath?.split('/') as string[]
         
         for (let i = 0; i < arrayPath.length; i++) {
            const el: string = arrayPath[i] as string
            if (el.includes('[') && el.includes(']')) {
               currentPathWithActualValues = currentPathWithActualValues.replaceAll(el, arrayCurrentPath[i] as string)
            }
         }
         
         return currentPathWithActualValues
      },
      awarePathIsSelected: (path: string): boolean => {
         // console.log(path, Array.from(segments.getAll('sid')), currentPath)
         const arrayPath = path.split('/') as string[]
         const arrayCurrentPath = currentPath?.split('/') as string[]
         let currentPathWithActualValues = path
         
         for (let i = 0; i < arrayPath.length; i++) {
            const el: string = arrayPath[i] as string
            if (el.includes('[') && el.includes(']')) {
               currentPathWithActualValues = currentPathWithActualValues.replaceAll(el, arrayCurrentPath[i] as string)
            }
         }
         
         return currentPath === currentPathWithActualValues
      },
      awareRootPathIsSelected: (path: string): boolean => {
         // console.log(path, Array.from(segments.getAll('sid')), currentPath)
         const arrayPath = path.split('/') as string[]
         const arrayCurrentPath = currentPath?.split('/') as string[]
         let currentPathWithActualValues = path
         
         for (let i = 0; i < arrayPath.length; i++) {
            const el: string = arrayPath[i] as string
            if (el.includes('[') && el.includes(']')) {
               currentPathWithActualValues = currentPathWithActualValues.replaceAll(el, arrayCurrentPath[i] as string)
            }
         }
         
         return currentPath?.includes(currentPathWithActualValues) ?? false
      },
   }
   
}
