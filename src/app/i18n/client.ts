'use client'

export function useTranslation(lng: string, ns: string | string[], options: any = {}) {
   const t = (value: string) => value
   return { t }
}
