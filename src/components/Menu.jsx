import React from 'react'
import { BusinessInformation } from './BusinessInformation'
import { HotDrinks } from './HotDrinks'
import { ColdDrinks } from './ColdDrinks'

export const Menu = () => {
  return (
    <div>
        <BusinessInformation/>
        <HotDrinks/>
        <ColdDrinks/>
    </div>
  )
}
