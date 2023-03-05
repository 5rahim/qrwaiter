import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const currentUserAtom = withImmer(atom<any>(undefined))

export const useCurrentUserAtom = () => {
   
   const [currentUser, setCurrentUser] = useAtom(currentUserAtom)
   
   return {
      currentUser,
      setCurrentUser,
   }
   
}
