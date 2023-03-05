import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const mutationLoadingAtom = withImmer(atom<boolean>(false))

export const useMutationLoading = () => {
   
   const [mutationLoading, setMutationLoading] = useAtom(mutationLoadingAtom)
   
   return {
      mutationLoading,
      setMutationLoading,
   }
   
}
