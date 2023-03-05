'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { Button } from '@ui/main/forms/button/Button'
import { Stack } from '@ui/main/layout/stack/Stack'
import React from 'react'

interface ClientErrorBoundaryProps {
   children?: React.ReactNode
   onReset: any
   error: any
}

const ClientErrorBoundary: React.FC<ClientErrorBoundaryProps> = (props) => {
   
   const { children, onReset, error, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   React.useEffect(() => {
      console.error('CLIENT ERROR:', error)
   }, [error])
   
   return (
      <>
         <div
            className="bg-red-50 text-red-500 min-h-full w-full rounded-md border-2 border-dashed border-red-500 justify-center items-center p-4"
         >
            <Stack>
               <p className="text-xl">
                  <strong>Error:</strong> {error?.message}
               </p>
               <Button onClick={onReset} intent="alert">Try Again</Button>
            </Stack>
         </div>
      </>
   )
   
}

export default ClientErrorBoundary
