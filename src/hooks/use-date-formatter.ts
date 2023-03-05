import { useCurrentLocale } from '@/atoms/locale.atom'
import { Nullable } from '@/types'
import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import isValid from 'date-fns/isValid'
import enUS from 'date-fns/locale/en-US'
import fr from 'date-fns/locale/fr'
import { Dates } from '@/utils/dates'

const getLocale = (locale: string) => locale === 'fr' ? fr : enUS


type DateFormat = "short" | "long" | "short with hours" | "long with hours"

const hour_formats: any = {
   '12': 'HH:mm',
   '24': 'hh:mm a..aa',
}

const date_formats: { [key: string]: any } = {
   short: { DMY: "dd/MM/yy", MDY: "MM/dd/yy" },
   long: { DMY: "dd MMMM yyyy", MDY: "MMMM dd, yyyy" },
   'short with hours': {
      '12': {
         DMY: "dd/MM/yy, hh:mm a",
         MDY: "MM/dd/yy, hh:mm a",
      },
      '24': {
         DMY: "dd/MM/yy, HH:mm",
         MDY: "MM/dd/yy, HH:mm",
      },
   },
   'long with hours': {
      '12': {
         DMY: "dd MMMM yyyy, hh:mm a",
         MDY: "MMMM dd, yyyy, hh:mm a",
      },
      '24': {
         DMY: "dd MMMM yyyy, HH:mm",
         MDY: "MMMM dd, yyyy, HH:mm",
      },
   },
}

/**
 * @example
 * const dateFormatter = useDateFormatter()
 */
export const useDateFormatter = () => {
   
   const { locale } = useCurrentLocale()
   
   /** In the future if we want to support the user changing format settings **/
   // const settings = useUserSettings()
   
   return {
      /**
       * Uses the 24hr format by default
       * @param utcDate
       * @param selected_format
       */
      formatDate: (utcDate: Nullable<Date | string>, selected_format: DateFormat) => {
         if (utcDate) {
            const d = typeof utcDate === 'string' ? Dates.asUTC(utcDate) : utcDate
            
            if (isValid(d) && locale) {
               const formats = date_formats[selected_format]
               
               // const date_format = settings.dateFormat ?? 'DMY'
               // const hour_format = settings.hourFormat ?? '24'
               const date_format = 'DMY'
               const hour_format = '24'
               
               if (selected_format === 'short' || selected_format === 'long') {
                  return format(d, (formats[date_format] as string), { locale: getLocale(locale) })
               }
               if (selected_format === 'short with hours' || selected_format === 'long with hours') {
                  return format(d, (formats[hour_format][date_format] as string), { locale: getLocale(locale) })
               }
            }
            
         } else {
            return 'N/A'
         }
      },
      formatDistanceToNow: (utcDate: Nullable<Date | string>,
         options?: { includeSeconds?: boolean | undefined, addSuffix?: boolean | undefined },
      ) => {
         if (utcDate) {
            const d = typeof utcDate === 'string' ? Dates.asUTC(utcDate) : utcDate
            if (isValid(d) && locale) {
               return formatDistanceToNow(d, { locale: getLocale(locale), ...options })
            }
            
         } else {
            return 'N/A'
         }
      },
   }
   
}
