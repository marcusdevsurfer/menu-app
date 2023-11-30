import React from 'react'

import { business } from '../helpers/business'

import '../styles/BusinessInformation.css'

export const BusinessInformation = () => {
    return (
        <div className='business-information-container'>
            <div className='menu-title'>
                <h2>MENU</h2>
            </div>
            <div className='opening-hours'>
                <h3>{business.name}</h3>
                <p>{business.schedule}</p>
            </div>
        </div>
    )
}
