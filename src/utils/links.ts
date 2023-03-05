import { siteLinks, SiteLinks, SiteRoute } from '@/config/links.config'
import { siteConfig } from '@/config/site.config'

export const linkTo = (path: string, lng: string | null) => {
   
   return (siteConfig.i18n && lng) ? `/${lng}${path}` : path
   
}

export const siteLinkTo = (callback: (links: SiteLinks) => SiteRoute, lng: string, ...parameters: { key: string, value: string }[]) => {
   let returnLink = `/${lng}` + callback(siteLinks).href
   
   if (parameters) {
      for (const parameter of parameters) {
         returnLink = returnLink.replaceAll(`[${parameter.key}]`, parameter.value)
      }
   }
   
   return returnLink
}
