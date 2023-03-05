export type CountriesConfig = { [code: string]: { code: string, name: string, flag_img: string, currency: string, currencySymbol: string, locale: string } }

export default {
   'ci': {
      code: 'ci',
      name: 'Côte d\'Ivoire',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949083609535479828/ivory-coast.png',
      locale: 'fr-FR',
      currency: 'XOF',
      currencySymbol: 'FCFA',
   },
   'sn': {
      code: 'sn',
      name: 'Sénégal',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084670832820274/senegal.png',
      locale: 'fr-FR',
      currency: 'XOF',
      currencySymbol: 'FCFA',
   },
   'tg': {
      code: 'tg',
      name: 'Togo',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084670123982858/togo.png',
      locale: 'fr-FR',
      currency: 'XOF',
      currencySymbol: 'FCFA',
   },
   'gh': {
      code: 'gh',
      name: 'Ghana',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084670350471168/ghana.png',
      locale: 'en-GH',
      currency: 'GHS',
      currencySymbol: '₵',
   },
   'ng': {
      code: 'ng',
      name: 'Nigeria',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084670610538536/nigeria.png',
      locale: 'en-NG',
      currency: 'NGN',
      currencySymbol: '₦',
   },
   'et': {
      code: 'et',
      name: 'Ethiopia',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084669255770112/ethiopia.png',
      locale: 'en-ET',
      currency: 'ETB',
      currencySymbol: 'Br',
   },
   'ke': {
      code: 'ke',
      name: 'Kenya',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084669058617404/kenya.png',
      locale: 'en-KE',
      currency: 'KES',
      currencySymbol: 'Ksh',
   },
   'za': {
      code: 'za',
      name: 'South Africa',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084668844724305/south-africa.png',
      locale: 'en-ZA',
      currency: 'ZAR',
      currencySymbol: 'R',
   },
   'rw': {
      code: 'rw',
      name: 'Rwanda',
      flag_img: 'https://media.discordapp.net/attachments/736421297239883991/949084668618211428/rwanda.png',
      locale: 'en-RW',
      currency: 'RWF',
      currencySymbol: 'RWF',
   },
} as CountriesConfig
