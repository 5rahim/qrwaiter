export type CountriesConfig = { [code: string]: { code: string, name: string, flag_img: string, currency: string, currencySymbol: string, locale: string } }

export default {
   'us': {
      code: 'us',
      name: 'United States',
      flag_img: '',
      locale: 'en-US',
      currency: 'USD',
      currencySymbol: '$',
   },
} as CountriesConfig
