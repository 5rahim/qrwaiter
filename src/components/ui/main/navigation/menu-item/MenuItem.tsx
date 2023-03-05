import RawLink from '@/components/ui/shared/links/RawLink'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { CSSProperties } from 'react'


const elementStyles = cva(
   "font-medium",
   {
      variants: {
         size: {
            sm: `text-sm h-8 px-3`,
            md: `h-9 px-4`,
            lg: `h-12 px-6`,
         },
         intent: {
            subtle: "text-gray-600 border border-gray-500 bg-transparent border-transparent hover:bg-gray-50 active:bg-gray-50",
            solid: "text-black bg-white hover:bg-gray-100 active:bg-bg-gray-200 border border-transparent",
         },
      },
      defaultVariants: {
         size: "md",
         intent: "subtle",
      },
   })


export interface MenuItemsProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {
   leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
   iconSpacing?: CSSProperties['marginInline']
   isSelected?: boolean
   href?: string
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemsProps>((props, ref) => {
   
   const {
      children,
      className,
      leftIcon,
      iconSpacing = "0.5rem",
      size = "md",
      intent = "subtle",
      isSelected,
      href,
      ...rest
   } = props
   
   const component = (
      <div
         className={cn(
            "flex flex-none items-center rounded-md cursor-pointer",
            elementStyles({ size, intent }),
            {
               "text-gray-900 bg-gray-100": isSelected && intent == 'subtle',
            },
            className,
         )}
         {...rest}
         ref={ref}
      >
         {leftIcon && <span
             className={cn(
                "inline-flex self-center flex-shrink-0 text-lg text-gray-500",
                {
                   "text-gray-900": isSelected,
                },
             )} style={{ marginInlineEnd: iconSpacing }}
         >{leftIcon}</span>}
         {children}
      </div>
   )
   
   if (!href) return component
   
   return <RawLink href={href}>
      {component}
   </RawLink>
   
})
