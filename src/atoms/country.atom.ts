import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const currentCountryAtom = withImmer(atom<string | undefined>('us'))

export const useCurrentCountry = () => {
   
   const [currentCountry, setCurrentCountry] = useAtom(currentCountryAtom)
   
   return currentCountry
   
}
