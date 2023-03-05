import { useDisclosure } from '@/hooks/use-disclosure'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { parseColor } from '@react-stately/color'
import { ColorSlider } from '@ui/main/forms/color/ColorSlider'
// import { TextInput } from '@ui/main/forms/input/TextInput'
import { Modal } from '@ui/main/overlay/modal/Modal'
import React, { useEffect, useState } from 'react'

export interface HLSAColorPickerProps extends React.ComponentPropsWithRef<'div'> {

}

export const HLSAColorPicker = React.forwardRef<HTMLDivElement, HLSAColorPickerProps>((props, ref) => {
   
   const {
      children,
      className,
      defaultValue,
      onChange,
      ...rest
   } = props
   
   let [hexValue, setHexValue] = useState('')
   let [color, setColor] = useState(
      parseColor('hsl(0,0%,0%)'),
   )
   
   const modalDisclosure = useDisclosure(false)
   
   useEffect(() => {
      // console.log(color)
      // onChange && onChange(color.toString('rgba'))
   }, [color])
   
   useEffect(() => {
      setHexValue(color.toString('hex'))
   }, [color])
   
   return (
      <>
         <div
            className={cn(
               "",
               className,
            )}
            {...rest}
            ref={ref}
         >
            <div
               className="p-2 border rounded-md shadow-sm w-[fit-content] cursor-pointer"
               onClick={modalDisclosure.open}
            >
               <div
                  className="h-10 w-10 rounded-md"
                  style={{ backgroundColor: color.toString('rgba') }}
               />
            </div>
            
            <Modal
               isOpen={modalDisclosure.isOpen}
               onClose={modalDisclosure.close}
               actions={[
                  { action: 'close' },
               ]}
            >
               <div className="space-y-4">
                  <div
                     className="h-14 w-14 rounded-md mx-auto"
                     style={{ backgroundColor: color.toString('rgba') }}
                  />
                  {/*<TextInput value={hexValue} onChange={v => setHexValue(v.target.value ?? '')} />*/}
                  <div>
                     <ColorSlider channel="hue" value={color} onChange={setColor} />
                     <ColorSlider channel="saturation" value={color} onChange={setColor} />
                     <ColorSlider channel="lightness" value={color} onChange={setColor} />
                     <ColorSlider channel="alpha" value={color} onChange={setColor} />
                  </div>
               </div>
            </Modal>
         </div>
      </>
   )
   
})

