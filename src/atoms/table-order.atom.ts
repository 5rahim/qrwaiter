import { CurrentTableOrder } from '@/graphql/services/table-order.server'
import { atom, useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const currentTableOrderAtom = withImmer(atom<CurrentTableOrder | undefined>(undefined))
export const currentChairAtom = withImmer(atom<{ chairNo: number, orderToken: string } | undefined>(undefined))

export const useCurrentTableOrder = () => {
   
   const [tableOrder, setTableOrder] = useAtom(currentTableOrderAtom)
   const [chair, setChair] = useAtom(currentChairAtom)
   
   return {
      tableOrder,
      chair,
      setTableOrder,
   }
   
}

export const useCurrentChair = () => {
   
   const [chair, setChair] = useAtom(currentChairAtom)
   
   return {
      chair,
      setChair,
   }
   
}
