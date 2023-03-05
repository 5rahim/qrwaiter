import RawLink from '@/components/ui/shared/links/RawLink'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { createPolymorphicComponent } from '@/utils/polymorphic-component'
import { BiEdit } from '@react-icons/all-files/bi/BiEdit'
import { BiLineChart } from '@react-icons/all-files/bi/BiLineChart'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { CgCheckO } from '@react-icons/all-files/cg/CgCheckO'
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight'
import { FiEyeOff } from '@react-icons/all-files/fi/FiEyeOff'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { IconButton, IconButtonProps } from '@ui/main/forms/button/IconButton'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva(null, {
   variants: {
      intent: {
         basic: 'is-basic divide-y divide',
         subtle: 'is-subtle',
         card: 'is-card divide-y-4 divide',
         'basic-slim': 'is-basic is-slim divide-y divide',
      },
   },
   defaultVariants: {
      intent: 'basic',
   },
})


export interface ObjectListProps extends React.ComponentPropsWithRef<'ul'>, VariantProps<typeof elementStyles> {
   isClickable?: boolean
}

const _ObjectList = React.forwardRef<HTMLUListElement, ObjectListProps>((props, ref) => {
   
   const {
      children,
      className,
      isClickable,
      intent,
      ...rest
   } = props
   
   return (
      <>
         <ul
            role="list"
            className={cn(
               "group flex flex-col",
               {
                  'is-clickable': isClickable,
               },
               elementStyles({ intent }),
               className,
            )}
            {...rest}
            ref={ref}
         >
            {children}
         </ul>
      </>
   )
   
})


export interface ObjectListItemProps extends Omit<React.ComponentPropsWithRef<'li'>, "title"> {
   title: React.ReactNode
   image?: React.ReactNode
   icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
   description?: React.ReactNode
   showAvailabilityStatus?: boolean
   itemIsAvailable?: boolean
   action?: React.ReactNode
   href?: string
   onHrefClicked?: () => void
   stackDetails?: boolean
}

const ObjectListItem: React.FC<ObjectListItemProps> =
   ({
      children,
      className,
      title,
      image,
      icon,
      description,
      showAvailabilityStatus,
      itemIsAvailable,
      action,
      href,
      onHrefClicked,
      stackDetails = false,
      ...rest
   }) => {
      
      const titleComponent = (
         <div
            className={cn(
               "flex flex-wrap items-center text-lg md:text-xl font-semibold truncate",
               "group-[.is-slim]:text-lg group-[.is-slim]:md:text-lg",
            )}
         >
            {title}
         </div>
      )
      
      const imageComponent = image ?
         <div className="flex-none justify-center w-16 h-16 mr-4 rounded-md overflow-hidden relative bg-slate-200 place-self-start">
            {image}
         </div> : <></>
      
      const component = (
         <li
            className={cn(
               "flex flex-row rounded-md bg-white hover:bg-gray-50",
               "group-[.is-basic]:block",
               "group-[.is-card]:border group-[.is-card]:mb-2 group-[.is-card]:shadow-sm",
               "group-[.is-clickable]:cursor-pointer",
               "group-[.is-slim]:rounded-none",
               className,
            )} {...rest}>
            
            <div
               className={cn(
                  "flex items-center flex-1 p-4 group-[.is-slim]:p-2 group-[.is-slim]:px-3",
                  { "flex-col items-start gap-2": stackDetails },
               )}
            >
               
               {imageComponent}
               
               {icon && icon}
               
               <div className="flex flex-col w-full flex-1 truncate">
                  
                  {titleComponent}
                  
                  <div className="text-sm text-gray-600 truncate">
                     {description}
                  </div>
               </div>
               
               
               <div
                  className={cn(
                     "flex flex-0 justify-end items-center text-right",
                     {
                        "divide divide-x-2 divide-width-0": showAvailabilityStatus,
                     },
                  )}
               >
                  
                  {showAvailabilityStatus && (
                     <>
                        {itemIsAvailable && <IconDisplay size="sm" intent="success-basic" icon={<CgCheckO />} />}
                        {!itemIsAvailable && <IconDisplay size="sm" intent="gray-basic" icon={<FiEyeOff />} />}
                     </>
                  )}
                  
                  <div>
                     {action}
                  </div>
               </div>
            </div>
         </li>
      )
      
      if (href) return <RawLink href={href}>{component}</RawLink>
      
      return component
      
   }

export interface ObjectListButtonProps extends IconButtonProps {
   use?: 'edit' | 'delete' | 'analytics' | 'open'
   href?: string
}

const ObjectListButton: React.FC<ObjectListButtonProps> = ({ children, icon, use, href, className, ...rest }) => {
   let buttonIcon: any
   let intent = "gray-basic"
   switch (use) {
      case 'edit':
         intent = "primary-basic"
         buttonIcon = <BiEdit />
         break
      case 'open':
         intent = "primary-basic"
         buttonIcon = <FaChevronRight />
         break
      case 'delete':
         intent = "alert-basic"
         buttonIcon = <BiTrash />
         break
      case 'analytics':
         intent = "warning-subtle"
         buttonIcon = <BiLineChart />
         break
   }
   
   const button = (
      <IconButton intent={intent as any} size="md" className={cn("px-1 w-auto", className)} icon={icon ?? buttonIcon} {...rest} />
   )
   
   if (href) {
      return <RawLink href={href}>{button}</RawLink>
   }
   
   return button
}

// @ts-ignore
_ObjectList.Item = ObjectListItem
// @ts-ignore
_ObjectList.ActionButton = ObjectListButton

export const ObjectList = createPolymorphicComponent<'div', ObjectListProps, {
   Item: typeof ObjectListItem,
   ActionButton: typeof ObjectListButton
   // Header: typeof ObjectListHeader,
}>(_ObjectList)
