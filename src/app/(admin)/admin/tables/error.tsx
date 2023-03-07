'use client'

import ClientErrorBoundary from '@/components/ui/shared/error-boundary/ClientErrorBoundary'
import React from 'react'

export default function Error({ error, reset }: any) {
   
   return (
      <ClientErrorBoundary error={error} onReset={() => reset()} />
   )
}
