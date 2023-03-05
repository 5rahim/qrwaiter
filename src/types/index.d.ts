import { z, ZodType } from 'zod'

export type Nullable<T> = T | null | undefined

export type SiteConfig = {
   name: string
   description: string
   baseUrl: string
   domain: string
   i18n: boolean
   protectedPages: string[]
}

export type MaybeRenderProp<P> =
   | React.ReactNode
   | ((props: P) => React.ReactNode)

export type InferType<S extends ZodType<any, any, any>> = z.infer<S>

declare global {
   namespace JSX {
      interface Element extends React.ReactElement<any, any> {
      }
   }
}
