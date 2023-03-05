import { clientSession } from '@/lib/session'
import { atom } from 'jotai'
import { withImmer } from 'jotai-immer'

export const clientSessionAtom = withImmer(atom<clientSession | null>(null))
