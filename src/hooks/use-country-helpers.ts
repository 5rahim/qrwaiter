import countries from '@/config/countries.config'
import { Nullable } from '@/types'

export default function useCountryHelpers() {
   return {
      getCountryList: () => {
         return Object.keys(countries)
      },
      
      getCountryFlag: (code: string) => {
         return countries[code]!.flag_img
      },
      
      getCountryName: (code: string) => {
         return countries[code]!.name
      },
      
      getCountryCurrency: (code: Nullable<string>) => {
         return code ? { currencyCode: countries[code]!.currency, currencySymbol: countries[code]!.currencySymbol } : {
            currencyCode: 'XOF', currencySymbol: "FCFA",
         }
      },
      
      getCountryLocale: (code: Nullable<string>) => {
         if (!code) return 'fr-FR'
         return countries[code]?.locale ?? 'fr-FR'
      },
      getCountryOptions: () => {
         return Object.keys(countries).map(v => ({ value: v, label: countries[v]!.name }))
      },
   }
}
