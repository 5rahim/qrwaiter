import { DB_GetUserByIdQuery } from '@/graphql/generated'

export type User = DB_GetUserByIdQuery['users_by_pk'] | undefined | null
