import { useMutationLoading } from '@/atoms/app.atom'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export const handleErrors = (error: any, message: string = "An error has occurred", debug: boolean) => {
   
   process.env.NODE_ENV === 'development' && console.error("[Error]: ", error)
   
   const additionalDetails = process.env.NODE_ENV === 'development' ? error?.message : undefined
   
   toast.dismiss()
   //
   toast.error(message, {
      position: "top-center",
      // description: additionalDetails,
   })
   
   throw new Error(message)
   
}

export function useMutationService(result: any) {
   
   const ml = useMutationLoading()
   
   useEffect(() => {
      
      if (result.failureCount === 1 || result.isError) {
         handleErrors(result.failureReason, 'An error has occured' as string, false)
      }
      
      if (result.isLoading) {
         ml.setMutationLoading(true)
      }
      
      if (result.isSuccess) {
         ml.setMutationLoading(false)
      }
      
   }, [result])
   
   
}
