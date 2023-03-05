'use client'

import useCountryHelpers from '@/hooks/use-country-helpers'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { BasicField, extractBasicFieldProps } from '@ui/main/forms/basic-field/BasicField'
import { TextInput, TextInputProps } from '@ui/main/forms/input/TextInput'
import Dinero, { Currency, Dinero as DineroType } from 'dinero.js'
import React, { ChangeEvent, useEffect, useId, useRef, useState } from 'react'


export interface LegacyPriceInputProps extends Omit<TextInputProps, "value" | "onChange"> {
   value?: string
   onChange?: (value: string) => void
   locale?: string
   country?: string
   leftAddon?: string | undefined
}

export const LegacyPriceInput = React.forwardRef<HTMLInputElement, LegacyPriceInputProps>((props, ref) => {
   
   const [{
      className,
      size = "md",
      value = "0",
      locale = 'fr',
      country = 'ci',
      intent,
      onChange,
      leftAddon,
      placeholder,
   }, basicFieldProps] = extractBasicFieldProps<LegacyPriceInputProps>(props, useId())
   
   const countryHelper = useCountryHelpers()
   const currency = countryHelper.getCountryCurrency(country).currencyCode as Currency
   
   const [dineroValue, setDineroValue] = useState<DineroType>(Dinero({ amount: parseInt(value as string, 10), currency }).setLocale(locale))
   const [newDineroValue, setNewDineroValue] = useState<DineroType | null>(null)
   const [formattedValue, setFormattedValue] = useState("")
   const [inputValue, setInputValue] = useState(formatNumber(dineroValue.toUnit().toString(), locale))
   const [isEditing, setIsEditing] = useState(false)
   
   
   useEffect(() => {
      setFormattedValue(dineroValue.toFormat())
      onChange && onChange((dineroValue.toUnit() * 100).toString())
   }, [dineroValue])
   
   useEffect(() => { // TODO: Change to useMemo
      setDineroValue(Dinero({ amount: parseInt(value as string, 10), currency }).setLocale(locale))
   }, [value, locale, currency])
   
   function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
      
      let _amount = 0
      let _dinero
      let _value = ""
      try {
         const replacing = locale.includes('fr') ? '.' : ','
         
         _value = truncateAfterSecondDecimal(removeNonNumericCharacters(event.target.value)).replaceAll(replacing, '')
         _amount = _value.length > 0
            ? extractFloat(truncateAfterSecondDecimal(removeNonNumericCharacters(event.target.value)).replaceAll(',', '.'))
            : 0
         
         _dinero = Dinero({ amount: _amount * 100, currency }).setLocale(locale)
      }
      catch (e) {
         _dinero = dineroValue
      }
      setNewDineroValue(_dinero)
      setInputValue(_value)
   }
   
   useEffect(() => {
      newDineroValue && setDineroValue(newDineroValue)
   }, [newDineroValue])
   
   function handleSave() {
      setIsEditing(false)
      newDineroValue && setDineroValue(newDineroValue)
   }
   
   const editInputRef = useRef<HTMLInputElement>(null)
   
   
   return (
      <>
         <BasicField
            className={cn("w-full gap-0")}
            {...basicFieldProps}
            ref={ref}
         >
            <div className={cn("flex items-center gap-2", className)}>
               {!isEditing && (
                  <TextInput
                     id={basicFieldProps.id}
                     value={formattedValue}
                     onChange={() => {}}
                     onClick={() => {
                        setIsEditing(true)
                        setTimeout(() => {
                           editInputRef.current?.focus()
                        }, 50)
                     }}
                     error={basicFieldProps.error}
                     isDisabled={basicFieldProps.isDisabled}
                     leftAddon={leftAddon}
                     size={size}
                     placeholder={placeholder}
                     intent={intent}
                     className="focus:border-gray-300 active:border-gray-300 active:ring-transparent cursor-pointer"
                  />
               )}
               
               {isEditing &&
                   <TextInput
                       value={inputValue}
                       onChange={handleOnChange}
                       error={basicFieldProps.error}
                       isDisabled={basicFieldProps.isDisabled}
                       onBlur={handleSave}
                       ref={editInputRef}
                       leftAddon={leftAddon}
                       size={size}
                       intent={intent}
                   />}
            
            </div>
         </BasicField>
      </>
   )
   
})


//
function extractFloat(input: string): number {
   // Use a regular expression to remove any non-numeric characters
   const floatString = input.replace(/[^\d.-]/g, "")
   
   // Convert the extracted string to a float and return it
   return parseFloat(floatString)
}

function removeNonNumericCharacters(input: string): string {
   return input.replace(/[^0-9,.]/g, '') ?? input
}

function truncateAfterSecondDecimal(input: string): string {
   if (input.length === 0) return ''
   const regex = /^([^,.]+)?([,.]\d{0,2})?/
   const match = regex.exec(input)
   if (!match) {
      return input
   }
   return match[1] + (match[2] || '')
}

function formatNumber(input: string | undefined, lang: string): string {
   // Parse the input string to a number
   let inputAsNumber = parseFloat(input ?? "0")
   if (isNaN(inputAsNumber)) {
      // If the input is not a valid number, return an empty string
      return "0"
   }
   
   // Multiply the input by 100 to ensure that it has 2 decimal places
   const inputWithDecimals = inputAsNumber
   
   // Use the Intl object to format the number with 2 decimal places
   const formattedNumber = new Intl.NumberFormat(lang, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   }).format(inputWithDecimals)
   
   // Return the formatted number as a string
   return formattedNumber.replaceAll(/\s/g, '')
}

function formatDecimal(str: string, lang: string) {
   // Use a regular expression to extract all the numbers from the string
   const numbers = str.match(/\d+\.\d+|\d+/g)
   
   // Set the decimal point character based on the language
   let decimalPoint = '.'
   if (lang.includes('fr')) {
      decimalPoint = ','
   }
   
   // Return the formatted string
   return numbers?.map(n => n.replace('.', decimalPoint)).join(' ')
}
