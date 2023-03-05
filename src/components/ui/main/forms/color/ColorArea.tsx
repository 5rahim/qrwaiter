import { useColorArea } from '@react-aria/color'
import { useFocusRing } from '@react-aria/focus'
import { ColorAreaProps, useColorAreaState } from '@react-stately/color'
import { useRef } from 'react'

const SIZE = 192
const FOCUSED_THUMB_SIZE = 28
const THUMB_SIZE = 20
const BORDER_RADIUS = 4

export function ColorArea(props: ColorAreaProps) {
   let inputXRef = useRef<HTMLInputElement>(null)
   let inputYRef = useRef<HTMLInputElement>(null)
   let containerRef = useRef<HTMLDivElement>(null)
   
   let state = useColorAreaState(props)
   
   let { isDisabled } = props
   
   let {
      colorAreaProps,
      gradientProps,
      xInputProps,
      yInputProps,
      thumbProps,
   } = useColorArea({ ...props, inputXRef, inputYRef, containerRef }, state)
   
   let { focusProps, isFocusVisible } = useFocusRing()
   
   return (
      <div
         ref={containerRef}
         {...colorAreaProps}
         style={{
            ...colorAreaProps.style,
            width: SIZE,
            height: SIZE,
            borderRadius: BORDER_RADIUS,
            opacity: isDisabled ? 0.3 : undefined,
         }}
      >
         <div
            {...gradientProps}
            style={{
               backgroundColor: isDisabled ? 'rgb(142, 142, 142)' : undefined,
               ...gradientProps.style,
               borderRadius: BORDER_RADIUS,
               height: SIZE,
               width: SIZE,
            }}
         />
         <div
            {...thumbProps}
            style={{
               ...thumbProps.style,
               background: isDisabled
                  ? 'rgb(142, 142, 142)'
                  : state.getDisplayColor().toString('css'),
               border: `2px solid ${isDisabled ? 'rgb(142, 142, 142)' : 'white'}`,
               borderRadius: '50%',
               boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
               boxSizing: 'border-box',
               height: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE,
               transform: 'translate(-50%, -50%)',
               width: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE,
            }}
         >
            <input ref={inputXRef} {...xInputProps} {...focusProps} />
            <input ref={inputYRef} {...yInputProps} {...focusProps} />
         </div>
      </div>
   )
}
