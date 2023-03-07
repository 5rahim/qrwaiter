import LoginButton from '@/app/(auth)/login/LoginButton'
import { linkTo } from '@/utils/links'
import { Button } from '@ui/main/forms/button/Button'
import { Container } from '@ui/main/layout/container/Container'
import { LayoutPaper } from '@ui/main/layout/paper/LayoutPaper'
import { Stack } from '@ui/main/layout/stack/Stack'
import RawLink from '@ui/shared/links/RawLink'

export default async function Page({ params: { lng, from } }: { params: { lng: string, from: string | null } }) {
   
   return (
      <>
         <div className="flex h-[100vh] w-full items-center">
            <Container size="sm">
               <LayoutPaper className="p-4 sm:p-8 text-center">
   
                  <Stack className="w-full gap-5">
      
                     {/*<div className="flex w-full justify-center">*/}
                     {/*   <Image src="/assets/images/logo.svg" alt="logo" width={976 / 10} height={250 / 10} />*/}
                     {/*</div>*/}
      
                     <p className="text-center font-bold text-lg">Login with google</p>
      
                     <Stack>
                        <LoginButton />
                        <RawLink href={linkTo('/', lng)}>
                           <Button intent="gray-link">Home</Button>
                        </RawLink>
                     </Stack>
                  
                  </Stack>
               
               </LayoutPaper>
            </Container>
         </div>
      </>
   )
}
