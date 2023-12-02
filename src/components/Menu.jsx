import React from 'react'
import { BusinessInformation } from './BusinessInformation'
import { HotDrinks } from './HotDrinks'
import { ColdDrinks } from './ColdDrinks'
import { Paninis } from './Paninis'

export const Menu = () => {
  return (
    <div>
        <BusinessInformation/>
        <HotDrinks/>
        <ColdDrinks/>
        <Paninis/>
    </div>
  )
}
