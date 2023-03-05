import { useDisclosure } from '@/hooks/use-disclosure'
import { _isEmpty } from '@/utils/common'
import { parseColor } from '@react-stately/color'
import { BasicField, BasicFieldOptions, extractBasicFieldProps } from '@ui/main/forms/basic-field/BasicField'
import { ColorArea } from '@ui/main/forms/color/ColorArea'
import { ColorSlider } from '@ui/main/forms/color/ColorSlider'
import { isValidCssColor, rgbToHsl } from '@ui/main/forms/color/utils'
// import { TextInput } from '@ui/main/forms/input/TextInput'
import { Modal } from '@ui/main/overlay/modal/Modal'
import React, { useEffect, useId, useState } from 'react'

export interface ColorAreaPickerProps extends Omit<React.ComponentPropsWithRef<'div'>, "onChange">, BasicFieldOptions {
   defaultValue?: string
   onChange?: (value: string) => void
}

export const ColorAreaPicker = React.forwardRef<HTMLDivElement, ColorAreaPickerProps>((props, ref) => {
   
   const [{
      children,
      className,
      defaultValue,
      onChange,
      ...rest
   }, basicFieldProps] = extractBasicFieldProps(props, useId())
   
   let [hexValue, setHexValue] = useState('')
   
   const [
      color,
      setColor,
   ] = useState(parseColor(defaultValue && !_isEmpty(defaultValue) && isValidCssColor(defaultValue) ? rgbToHsl(defaultValue) : 'hsl(0,0%,0%)'))
   const [
      hChannel,
      sChannel,
      lChannel,
   ] = color.getColorChannels()
   
   const modalDisclosure = useDisclosure(false)
   
   useEffect(() => {
      onChange && onChange(color.toString('rgba'))
   }, [color])
   
   useEffect(() => {
      setHexValue(color.toString('hex'))
   }, [color])
   
   return (
      <>
         <BasicField
            {...basicFieldProps}
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
                     className="h-14 w-14 rounded-md mx-auto border"
                     style={{ backgroundColor: color.toString('rgba') }}
                  />
                  {/*<TextInput value={hexValue} onChange={v => setHexValue(v.target.value ?? '')} />*/}
                  <div className="flex flex-col items-center">
                     <ColorArea
                        aria-labelledby="slh-label-id-1"
                        value={color}
                        onChange={setColor}
                        xChannel={sChannel}
                        yChannel={lChannel}
                     />
                     <ColorSlider
                        channel={hChannel}
                        value={color}
                        onChange={setColor}
                     />
                  </div>
               </div>
            </Modal>
         </BasicField>
      </>
   )
   
})

