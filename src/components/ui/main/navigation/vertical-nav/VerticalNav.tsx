import { cn } from '@/lib/tailwind/tailwind-utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva(null, {
   variants: {},
   defaultVariants: {},
})


export interface VerticalNavProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {

}

/**
 * TODO: A stack of MenuItems that takes items = {}[] as prop
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<VerticalNavProps> & React.RefAttributes<HTMLDivElement>>}
 */
export const VerticalNav = React.forwardRef<HTMLDivElement, VerticalNavProps>((props, ref) => {
   
   const {
      children,
      className,
      ...rest
   } = props
   
   return (
      <>
         <div
            className={cn(
               ``,
               elementStyles({}),
               className,
            )}
            {...rest}
            ref={ref}
         >
            {children}
         </div>
      </>
   )
   
})
