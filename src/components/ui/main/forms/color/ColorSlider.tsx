import { useCurrentLocale } from '@/atoms/locale.atom'
import { useColorSlider } from '@react-aria/color'
import { useFocusRing } from '@react-aria/focus'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useColorSliderState } from '@react-stately/color'
import { ColorSliderProps } from '@react-types/color'
import React, { useRef } from 'react'

const TRACK_THICKNESS = 24
const THUMB_SIZE = 20

export function ColorSlider(props: ColorSliderProps) {
   let { locale } = useCurrentLocale()
   let state = useColorSliderState({ ...props, locale })
   let trackRef = useRef<HTMLDivElement>(null)
   let inputRef = useRef<HTMLInputElement>(null)
   
   // Default label to the channel name in the current locale
   let label = props.label || state.value.getChannelName(props.channel, locale)
   
   let { trackProps, thumbProps, inputProps, labelProps, outputProps } =
      useColorSlider({
         ...props,
         label,
         trackRef,
         inputRef,
      }, state)
   
   let { focusProps, isFocusVisible } = useFocusRing()
   
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
         }}
      >
         {/* Create a flex container for the label and output element. */}
         <div style={{ display: 'flex', alignSelf: 'stretch' }}>
            <label {...labelProps}>{label}</label>
            <output {...outputProps} style={{ flex: '1 0 auto', textAlign: 'end' }}>
               {state.value.formatChannelValue(props.channel, locale)}
            </output>
         </div>
         {/* The track element holds the visible track line and the thumb. */}
         <div
            {...trackProps}
            ref={trackRef}
            style={{
               ...trackProps.style,
               height: TRACK_THICKNESS,
               width: '100%',
               borderRadius: '5rem',
            }}
         >
            <div
               {...thumbProps}
               style={{
                  ...thumbProps.style,
                  top: TRACK_THICKNESS / 2,
                  border: '2px solid white',
                  boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
                  width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
                  height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
                  borderRadius: '50%',
                  boxSizing: 'border-box',
                  background: state.getDisplayColor().toString('css'),
               }}
            >
               <VisuallyHidden>
                  <input ref={inputRef} {...inputProps} {...focusProps} />
               </VisuallyHidden>
            </div>
         </div>
      </div>
   )
}
