export const fallbackLng = 'fr'
export const languages = [fallbackLng, 'en']
export const defaultNS = 'shared'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
   return {
      // debug: true,
      supportedLngs: languages,
      // preload: languages,
      fallbackLng,
      lng,
      fallbackNS: defaultNS,
      defaultNS,
      ns,
      // backend: {
      //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
      // }
   }
}
