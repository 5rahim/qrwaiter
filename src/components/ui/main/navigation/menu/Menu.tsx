import { cn } from '@/lib/tailwind/tailwind-utils'
import { Menu as HeadlessMenu, Transition } from '@headlessui/react'
import { MenuItem, MenuItemsProps } from '@ui/main/navigation/menu-item/MenuItem'
import React, { Fragment } from 'react'


export interface MenuProps extends React.ComponentPropsWithRef<'div'> {
   trigger: React.ReactNode
   options: {
      label: string,
      href?: string,
      onClick?: () => void,
      leftIcon?: MenuItemsProps['leftIcon'],
      itemProps?: MenuItemsProps
   }[]
   dropdownClassName?: string
   itemsClassName?: string
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
   
   const {
      children,
      className,
      trigger,
      options,
      dropdownClassName,
      itemsClassName,
      ...rest
   } = props
   
   return (
      <>
         <HeadlessMenu
            as="div"
            className={cn(
               "relative inline-block text-left",
               className,
            )}
            {...rest}
            ref={ref}
         >
            <div>
               <HeadlessMenu.Button as={React.Fragment}>
                  {trigger}
               </HeadlessMenu.Button>
            </div>
            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <HeadlessMenu.Items
                  className={cn(
                     "absolute right-0 mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                     dropdownClassName,
                  )}
               >
                  <div className="px-1 py-1 ">
                     {options.map(({ label, leftIcon, onClick, ...opt }) => {
                        return (
                           <HeadlessMenu.Item
                              as={MenuItem}
                              key={label}
                              children={label}
                              onClick={onClick}
                              leftIcon={leftIcon}
                              className={itemsClassName}
                              {...opt}
                           />
                        )
                     })}
                  </div>
               </HeadlessMenu.Items>
            </Transition>
         </HeadlessMenu>
      </>
   )
   
})

