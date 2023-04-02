import { fallbackLng } from '@/app/i18n/settings'
import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const localeAtom = withImmer(atom<string>(fallbackLng))

export const useCurrentLocale = () => {
   
   const [locale, setLocale] = useAtom(localeAtom)
   
   return {
      locale,
      setLocale,
      countryLocale: 'en-US',
   }
   
}
