import { cn } from '@/lib/tailwind/tailwind-utils'
import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import React from 'react'


const elementStyles = cva(null, {
   variants: {},
   defaultVariants: {},
})


export interface StatProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {
   imageSrc?: string
   imageClassName?: string
   valueClassName?: string
   name?: string
   value?: string
   subtext?: string
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>((props, ref) => {
   
   const {
      children,
      className,
      imageSrc,
      imageClassName,
      valueClassName,
      name,
      value,
      subtext,
      ...rest
   } = props
   
   return (
      <>
         <div
            className={cn(
               "relative overflow-hidden bg-white border border-gray-200 rounded-md w-full",
               className,
            )}
            {...rest}
            ref={ref}
         >
            {imageSrc && <Image
                src={imageSrc}
                alt="stat logo"
                width={115}
                height={115}
                sizes="100vw"
                className={cn(
                   "absolute w-24 h-24 rounded-full opacity-50 -top-4 -right-4 md:-right-4 -rotate-12",
                   imageClassName,
                )}
            />}
            <div className="px-4 py-5 sm:p-6">
               <dl>
                  <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                     {name}
                  </dt>
                  <dd className={cn("mt-1 text-2xl font-bold leading-9 text-gray-900", valueClassName)}>
                     {value}
                  </dd>
                  <dd className="font-semibold text-gray-500">
                     <span>
                        {subtext}
                     </span>
                  </dd>
               </dl>
            </div>
         </div>
      </>
   )
   
})
