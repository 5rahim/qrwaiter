import { cn } from '@/lib/tailwind/tailwind-utils'
import { FiList } from '@react-icons/all-files/fi/FiList'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { LayoutPaper } from '@ui/main/layout/paper/LayoutPaper'
import { Stack } from '@ui/main/layout/stack/Stack'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva(null, {
   variants: {},
   defaultVariants: {},
})


export interface EmptyProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {
   title: string,
   description: string
   hideIf: boolean
}

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
   
   const {
      children,
      className,
      title,
      description,
      hideIf,
      ...rest
   } = props
   
   if (hideIf) return <></>
   
   return (
      <>
         <LayoutPaper
            className={cn(
               "p-4 sm:p-8",
               elementStyles({}),
               className,
            )}
            {...rest}
            ref={ref}
         >
            <Stack className="text-center w-full justify-center">
               <IconDisplay icon={<FiList />} intent="primary-subtle" rounded size="lg" className="place-self-center" />
               <h2 className="font-semibold text-2xl">{title}</h2>
               <p className="w-full sm:max-w-xl mx-auto">{description}</p>
            </Stack>
         </LayoutPaper>
      </>
   )
   
})
