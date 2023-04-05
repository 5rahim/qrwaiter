import { Nullable } from '@/types'
import Dinero from 'dinero.js'
import _ from 'lodash'

export const usePriceFormatter = () => {
   
   return {
      toFormat: (rawAmount: Nullable<number | string>) => {
         if (rawAmount) {
            let amount: number = rawAmount as number
            if (_.isString(rawAmount)) amount = parseInt(rawAmount)
            return Dinero({ amount: amount, currency: 'USD', precision: 2 }).setLocale('en').toFormat()
         }
         
         return "0"
      },
   }
   
}
