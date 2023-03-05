'use client'

import RawLink from '@/components/ui/shared/links/RawLink'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { createPolymorphicComponent } from '@/utils/polymorphic-component'
import { Container } from '@ui/main/layout/container/Container'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva(null, {
   variants: {},
   defaultVariants: {},
})


export interface StandardNavbarProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {
   logoText: string
   homeHref: string
   logoImage?: React.ReactNode
   action?: React.ReactNode
}

const _StandardNavbar = React.forwardRef<HTMLDivElement, StandardNavbarProps>((props, ref) => {
   
   const {
      children,
      className,
      logoText,
      logoImage,
      homeHref,
      action,
      ...rest
   } = props
   
   return (
      <>
         <div
            className={cn(
               "bg-white flex w-full h-[70px] z-40", // General style
               "fixed bottom-0 md:top-0", // Position
               "border border-t-1 border-gray-200", // Mobile style
               "md:shadow-sm md:border-none", // Desktop style. Prefix: md:
            )}
            ref={ref}
         >
            <Container size="lg">
               <div className="relative h-[70px] w-full flex items-center justify-between">
                  
                  <div className="flex h-full items-center hidden relative md:flex">
                     <RawLink href={homeHref}>
                        {!logoImage ? <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                           {logoText}
                        </span> : logoImage}
                     </RawLink>
                  </div>
                  
                  <ul
                     className={cn(
                        "flex h-[100%] items-center justify-center space-x-0", // General style
                        "w-full", // Mobile style
                        "md:w-auto", // Desktop style md:
                     )}
                  >
                     {children}
                  </ul>
                  
                  <ul className="flex items-center hidden space-x-8 md:flex">
                     {action}
                  </ul>
               </div>
            </Container>
         </div>
      </>
   )
   
})

export interface StandardNavbarItemProps extends React.ComponentPropsWithRef<'li'> {
   leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
   isSelected?: boolean
   href?: string
   hideOnDesktop?: boolean
}

const StandardNavbarItem: React.FC<StandardNavbarItemProps> = ({
   children,
   className,
   leftIcon,
   isSelected,
   href,
   hideOnDesktop,
   ...rest
}) => {
   
   const component = (
      <li
         className={cn(
            "flex h-[70px] cursor-pointer hover:bg-gray-50 flex-none items-center font-medium tracking-wide",
            "transition-colors duration-200 border-transparent -mb-px border-b-2 pt-px transition-colors duration-200 ease-out",
            "flex-col justify-center px-3 text-sm text-gray-600", // Mobile style
            "md:flex-row md:px-4 md:gap-2 md:text-md md:text-gray-700", // Desktop style
            {
               "border-brand-500 text-brand-500 md:text-gray-900": isSelected,
            },
            {
               "md:hidden": hideOnDesktop,
            },
            className,
         )}
         {...rest}
      >
         {leftIcon && <span className="text-2xl">{leftIcon}</span>}
         {children}
      </li>
   )
   
   if (!href) return component
   
   return (
      <RawLink href={href ?? "/"}>
         {component}
      </RawLink>
   )
}

// @ts-ignore
_StandardNavbar.Item = StandardNavbarItem

export const StandardNavbar = createPolymorphicComponent<"div", StandardNavbarProps, {
   Item: typeof StandardNavbarItem
}>(_StandardNavbar)
