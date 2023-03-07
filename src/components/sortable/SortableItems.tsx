import { MaybeRenderProp } from '@/types'
import { runIfFn } from '@/utils/components'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { LoadingSpinner } from '@ui/shared/loading-spinner/LoadingSpinner'
import ShowOnly from '@ui/shared/show-only/ShowOnly'
import React, { useCallback, useEffect, useState } from 'react'


// export function useSortableItems<TData extends Array<Record<string, any> & { id: string, order: number }>>(data: TData, onOrderChange: (values: {
// where: { id: { _eq: string } }, _set: { order: number } }[]) => void) {  const [items, setItems] = useState<TData>(data)  useEffect(() => {
// setItems(data) }, [data])  const handleDragEnd = useCallback((event: DragEndEvent) => { if (!event) return const { active, over } = event  if
// (active && over && active.id !== over?.id) { setItems((items) => { const oldIndex = items?.findIndex(item => item?.id === active.id) ?? 0 const
// newIndex = items?.findIndex(item => item?.id === over?.id) ?? 0 const n = arrayMove(items, oldIndex as number, newIndex as number) const newArray
// = n.map((a, i) => ({ ...a, order: i })) const order = newArray.map(v => ({ where: { id: { _eq: v?.id } }, _set: { order: v?.order } }))
// onOrderChange(order)  // updateTableOrder({ //    order: order, // }) return newArray as TData }) } }, [data])  return { items, handleDragEnd }  }

export interface SortableItemsProps<TData> extends Omit<React.ComponentPropsWithRef<'div'>, "children"> {
   data: TData
   isLoading: boolean
   children: MaybeRenderProp<TData>
   onOrderChange: (values: { where: { id: { _eq: string } }, _set: { order: number } }[]) => void
}

export function SortableItems<TData extends Array<Record<string, any> & { id: string, order: number }>>(props: SortableItemsProps<TData>) {
   
   const {
      children,
      className,
      data,
      onOrderChange,
      isLoading,
      ...rest
   } = props
   
   const [items, setItems] = useState<TData>(data)
   
   useEffect(() => {
      setItems(data)
   }, [data])
   
   const handleDragEnd = useCallback((event: DragEndEvent) => {
      if (!event) return
      const { active, over } = event
      
      if (active && over && active.id !== over?.id) {
         setItems((items) => {
            const oldIndex = items?.findIndex(item => item?.id === active.id) ?? 0
            const newIndex = items?.findIndex(item => item?.id === over?.id) ?? 0
            const n = arrayMove(items, oldIndex as number, newIndex as number)
            const newArray = n.map((a, i) => ({ ...a, order: i }))
            const order = newArray.map(v => ({ where: { id: { _eq: v?.id } }, _set: { order: v?.order } }))
            
            onOrderChange(order)
            
            return newArray as TData
         })
      }
   }, [data])
   
   return (
      <>
         <DndContext
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
         >
            <ShowOnly when={!isLoading}>
               <SortableContext
                  strategy={verticalListSortingStrategy}
                  items={items.map(t => t?.id)}
               >
                  <div className="space-y-2">
                     {runIfFn(children, items)}
                  </div>
               </SortableContext>
            </ShowOnly>
            <ShowOnly when={isLoading}>
               <LoadingSpinner />
            </ShowOnly>
         </DndContext>
      </>
   )
   
}
