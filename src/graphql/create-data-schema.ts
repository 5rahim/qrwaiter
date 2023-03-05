import { z as zod } from 'zod'

type DataSchemaCallback<S extends zod.ZodRawShape> = ({ z, errorMessage }: { z: typeof zod, errorMessage: string }) => zod.ZodObject<S>
export const createDataSchema = <S extends zod.ZodRawShape>(callback: DataSchemaCallback<S>): DataSchemaCallback<S> => {
   return callback
}

export const createDataObject = <S extends zod.ZodRawShape>(callback: DataSchemaCallback<S>): zod.ZodObject<S> => {
   const schema = callback({ z: zod, errorMessage: 'Invalid field' })
   return schema
}

