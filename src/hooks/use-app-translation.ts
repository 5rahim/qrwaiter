import { useTranslation } from '@/app/i18n/client'
import { useCurrentLocale } from '@/atoms/locale.atom'
import { siteConfig } from '@/config/site.config'

/**
 * @example
 * const t = useAppTranslation()
 * @param translations
 */
export const useAppTranslation = (translations: string[] = []) => {
   
   const { locale } = useCurrentLocale()
   const { t } = useTranslation(locale, ['shared', 'form', 'categories', 'empty', ...translations])
   
   let returnFunc = null
   
   if (siteConfig.i18n)
      returnFunc = t
   else
      returnFunc = (value: string) => value
   
   return returnFunc as (value: string) => string
}
