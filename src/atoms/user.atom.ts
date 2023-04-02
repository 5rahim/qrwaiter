import { User } from '@/graphql/users/types'
import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const currentUserAtom = withImmer(atom<User>(undefined))

export const useCurrentUser = () => {
   
   const [user, setUser] = useAtom(currentUserAtom)
   
   return {
      user,
      setUser,
   }
   
}
