import { cn } from '@/lib/tailwind/tailwind-utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { CSSProperties } from 'react'


const buttonStyles = cva(`py-2 px-4 shadow-sm`, {
   variants: {
      intent: {
         'primary': 'bg-brand-500 hover:bg-brand-600 active:bg-brand-700 border border-transparent',
         'primary-outline': 'text-brand-500 border border-brand-200 bg-transparent hover:bg-brand-500 active:bg-brand-600 hover:text-white',
         'primary-subtle': 'text-brand-600 border border-brand-500 bg-brand-50 border-transparent hover:bg-brand-100 active:bg-brand-50',
         'primary-link': 'shadow-none text-brand-500 border border-transparent bg-transparent hover:underline active:text-brand-700',
         'primary-basic': 'shadow-none text-brand-500 border border-transparent bg-transparent hover:text-brand-600 active:text-brand-700',
         
         'warning': 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 border border-transparent',
         'warning-outline': 'text-orange-500 border border-orange-200 bg-transparent hover:bg-orange-500 active:bg-orange-600 hover:text-white',
         'warning-subtle': 'text-orange-600 border border-orange-500 bg-orange-50 border-transparent hover:bg-orange-100 active:bg-orange-50',
         'warning-link': 'shadow-none text-orange-500 border border-transparent bg-transparent hover:underline active:text-orange-700',
         'warning-basic': 'shadow-none text-orange-500 border border-transparent bg-transparent hover:text-orange-600 active:text-orange-700',
         
         'success': 'bg-green-500 hover:bg-green-600 active:bg-green-700 border border-transparent',
         'success-outline': 'text-green-500 border border-green-200 bg-transparent hover:bg-green-500 active:bg-green-600 hover:text-white',
         'success-subtle': 'text-green-600 border border-green-500 bg-green-50 border-transparent hover:bg-green-100 active:bg-green-50',
         'success-link': 'shadow-none text-green-500 border border-transparent bg-transparent hover:underline active:text-green-700',
         'success-basic': 'shadow-none text-green-500 border border-transparent bg-transparent hover:text-green-600 active:text-green-700',
         
         'alert': 'bg-red-500 hover:bg-red-600 active:bg-red-700 border border-transparent',
         'alert-outline': 'text-red-500 border border-red-200 bg-transparent hover:bg-red-500 active:bg-red-600 hover:text-white',
         'alert-subtle': 'text-red-600 border border-red-500 bg-red-50 border-transparent hover:bg-red-100 active:bg-red-50',
         'alert-link': 'shadow-none text-red-500 border border-transparent bg-transparent hover:underline active:text-red-700',
         'alert-basic': 'shadow-none text-red-500 border border-transparent bg-transparent hover:text-red-600 active:text-red-700',
         
         'gray': 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 border border-transparent',
         'gray-outline': 'text-gray-600 border border-gray-200 bg-transparent hover:bg-gray-100 active:bg-gray-200',
         'gray-subtle': 'text-gray-600 border border-gray-500 bg-gray-50 border-transparent hover:bg-gray-100 active:bg-gray-50',
         'gray-link': 'shadow-none text-gray-500 border border-transparent bg-transparent hover:underline active:text-gray-700',
         'gray-basic': 'shadow-none text-gray-500 border border-transparent bg-transparent hover:text-gray-600 active:text-gray-700',
         
         'white': 'text-black bg-white hover:bg-gray-100 active:bg-bg-gray-200 border border-transparent',
         'white-outline': 'text-white border border-gray-200 bg-transparent hover:bg-white hover:text-black active:bg-gray-100 active:text-black',
         'white-subtle': 'text-white bg-black bg-opacity-20 hover:bg-opacity-25 active:bg-bg-opacity-30 border border-transparent',
         'white-link': 'shadow-none text-white border border-transparent bg-transparent hover:underline active:text-gray-200',
         'white-basic': 'shadow-none text-white border border-transparent bg-transparent hover:text-white-200 active:text-white-300',
      },
      size: {
         xs: `text-sm h-6 px-2`,
         sm: `text-sm h-8 px-3`,
         md: `h-10 px-4`,
         lg: `h-12 px-6`,
         xl: `text-xl h-14 px-8`,
      },
   },
   defaultVariants: {
      intent: 'primary',
      size: 'md',
   },
})


export interface ButtonProps extends React.ComponentPropsWithRef<'button'>, VariantProps<typeof buttonStyles> {
   rounded?: boolean
   isLoading?: boolean,
   isDisabled?: boolean,
   isUppercase?: boolean,
   leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
   rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
   iconSpacing?: CSSProperties['marginInline']
   contentWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   
   const {
      children,
      size,
      className,
      rounded = false,
      contentWidth = false,
      intent,
      leftIcon,
      rightIcon,
      iconSpacing = "0.5rem",
      isUppercase,
      isLoading,
      isDisabled,
      ...rest
   } = props
   
   const ButtonContent = <>
      {leftIcon && <span className="inline-flex self-center flex-shrink-0" style={{ marginInlineEnd: iconSpacing }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex self-center flex-shrink-0" style={{ marginInlineStart: iconSpacing }}>{rightIcon}</span>}
   </>
   
   return (
      <>
         
         <button
            type="button"
            className={cn(
               `inline-flex items-center text-white transition ease-in duration-100 text-center text-base justify-center font-semibold rounded-md`,
               {
                  'rounded-[999px]': rounded,
                  'uppercase': isUppercase,
                  'opacity-50 pointer-events-none': isDisabled || isLoading,
               },
               buttonStyles({ size, intent }),
               {
                  "w-[fit-content]": contentWidth,
               },
               className,
            )}
            {...rest}
            ref={ref}
         >
            {isLoading ? (
               <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                  </path>
               </svg>
            ) : ButtonContent}
         </button>
      </>
   )
   
})
