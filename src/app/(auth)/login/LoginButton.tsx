'use client'

import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'
import { Button } from '@ui/main/forms/button/Button'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface LoginButtonProps {
   children?: React.ReactNode
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
   
   const { children, ...rest } = props
   const links = useLinks()
   const params = useSearchParams()
   
   return (
      <>
         <Button
            intent="primary-outline"
            size="lg"
            leftIcon={<FcGoogle />}
            onClick={() => signIn("google", {
               callbackUrl: params?.get('from') ?? '/',
            })}
         >
            Continue with google
         </Button>
      </>
   )
   
}

export default LoginButton
