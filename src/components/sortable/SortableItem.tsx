import { cn } from '@/lib/tailwind/tailwind-utils'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { BiMoveVertical } from '@react-icons/all-files/bi/BiMoveVertical'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'


const elementStyles = cva([
   "flex bg-gray-50 p-4 justify-between items-center",
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
            className="flex cursor-pointer justify-center items-center w-5 h-8 rounded-md"
            ref={setActivatorNodeRef}
            {...listeners}
         ><BiMoveVertical /></div>
      </div>
   )
   
})
