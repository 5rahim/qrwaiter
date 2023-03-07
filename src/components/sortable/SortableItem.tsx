import { cn } from '@/lib/tailwind/tailwind-utils'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { BiDotsVertical } from '@react-icons/all-files/bi/BiDotsVertical'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva([
   "flex border p-4 rounded-md bg-white justify-between items-center",
], {
   variants: {},
   defaultVariants: {},
})


export interface SortableItemProps extends React.ComponentPropsWithRef<'div'>, VariantProps<typeof elementStyles> {
   id: string
}

export const SortableItem = React.forwardRef<HTMLDivElement, SortableItemProps>((props, ref) => {
   
   const {
      children,
      className,
      id,
      ...rest
   } = props
   
   const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      setActivatorNodeRef,
   } = useSortable({ id })
   
   const style = {
      transform: CSS.Transform.toString(transform),
      transition,
   }
   
   return (
      <div
         ref={setNodeRef}
         style={style}
         className={cn(
            elementStyles({}),
            className,
         )}
         {...rest}
      >
         {children}
         <div
            className="flex cursor-pointer justify-center items-center w-5 h-8 bg-gray-100 rounded-md"
            ref={setActivatorNodeRef}
            {...listeners}
         ><BiDotsVertical /></div>
      </div>
   )
   
})
