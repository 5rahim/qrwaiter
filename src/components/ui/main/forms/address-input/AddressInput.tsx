import { useAppTranslation } from '@/hooks/use-app-translation'
import { _isEmpty } from '@/utils/common'
import { LoaderOptions } from '@googlemaps/js-api-loader'
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin'
import { GoogleMapsAutocompletionRequest, useGoogleMapsAutocomplete } from '@ui/main/forms/address-input/use-google-maps-autocomplete'
import { extractBasicFieldProps } from '@ui/main/forms/basic-field/BasicField'
import { Combobox, ComboboxProps } from '@ui/main/forms/combobox/Combobox'
import React, { useId } from 'react'

export interface AddressInputProps extends Omit<ComboboxProps, "options" | "onInputChange" | "onChange"> {
   autocompletionRequest?: GoogleMapsAutocompletionRequest
   apiOptions?: Partial<LoaderOptions>
   allowedCountries?: string | string[] | null
   onChange?: (value: string | undefined) => void
}

export const AddressInput = React.forwardRef<HTMLInputElement, AddressInputProps>((props, ref) => {
   
   const [{
      children,
      className,
      autocompletionRequest,
      apiOptions,
      defaultValue,
      allowedCountries = null,
      onChange,
      ...rest
   }, basicFieldProps] = extractBasicFieldProps<AddressInputProps>(props, useId())
   
   const t = useAppTranslation()
   
   
   const { suggestions, fetchSuggestions } = useGoogleMapsAutocomplete({
      apiKey: "",
      minLengthAutocomplete: 0,
      withSessionToken: false,
      debounce: 300,
      autocompletionRequest: {
         componentRestrictions: { country: allowedCountries },
      },
   })
   
   return (
      <>
         <Combobox
            returnValueOrLabel="label"
            allowCustomValue={false}
            withFiltering={false} // We deactivate filtering because the options are automatically filtered by the API
            options={_isEmpty(suggestions) && defaultValue ? [{ value: defaultValue, label: defaultValue }] : suggestions}
            onInputChange={fetchSuggestions}
            defaultValue={defaultValue}
            onChange={onChange}
            leftIcon={<FiMapPin />}
            placeholder={t('form:enter_address')}
            noOptionsMessage={t('form:no_address_found')}
            {...basicFieldProps}
            {...rest}
            ref={ref}
         />
      </>
   )
   
})
