import { cn } from '@/lib/tailwind/tailwind-utils'
import { IconType } from '@react-icons/all-files'
import RawLink from '@ui/shared/links/RawLink'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva(null, {
   variants: {},
   defaultVariants: {},
})


export interface LinkTabsProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {
   tabs: { name: string, href: string, icon: IconType, isSelected: boolean }[]
}

export const LinkTabs = React.forwardRef<HTMLDivElement, LinkTabsProps>((props, ref) => {
   
   const {
      children,
      className,
      tabs,
      ...rest
   } = props
   
   return (
      <>
         <div
            className={cn(
               "flex flex-row flex-none overflow-x-auto w-full",
               elementStyles({}),
               className,
            )}
            {...rest}
            ref={ref}
         >
            <div className="border-b border-gray-200 w-full">
               <nav className="-mb-px flex w-full" aria-label="Tabs">
                  {tabs.map((tab) => (
                     <RawLink
                        key={tab.name}
                        href={tab.href}
                        className={cn(
                           'px-10 flex flex-none',
                           tab.isSelected
                              ? 'border-brand-500 text-brand-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                           'group inline-flex items-center py-4 border-b-2 font-medium text-md',
                        )}
                        aria-current={tab.isSelected ? 'page' : undefined}
                     >
                        <tab.icon
                           className={cn(
                              tab.isSelected ? 'text-brand-500' : 'text-gray-400 group-hover:text-gray-500',
                              '-ml-0.5 mr-2 h-5 w-5',
                           )}
                           aria-hidden="true"
                        />
                        <span>{tab.name}</span>
                     </RawLink>
                  ))}
               </nav>
            </div>
         </div>
      </>
   )
   
})
