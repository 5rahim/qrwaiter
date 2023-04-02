'use client'

import { restaurantAtom } from '@/atoms/restaurant.atom'
import { Restaurant } from '@/graphql/types'
import { User } from '@/graphql/users/types'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { useLinks } from '@/hooks/use-links'
import { useHydrateAtoms } from 'jotai/react/utils'
import React from 'react'

interface AtomPreloaderProps {
   children?: React.ReactNode
   user?: User,
   restaurant: Restaurant
}

const AtomPreloader: React.FC<AtomPreloaderProps> = (props) => {
   
   const { children, restaurant, ...rest } = props
   const links = useLinks()
   const t = useAppTranslation()
   
   useHydrateAtoms([[restaurantAtom, restaurant]])
   
   return null
   
}

export default AtomPreloader
