import React from 'react'
import { menu } from '../helpers/menu'

import '../styles/HotDrinks.css'

export const HotDrinks = () => {
    return (
        <div className='hot-drinks-container'>

            <div className='hot-drinks-title-container'>
                <h3>Bebidas calientes</h3>
            </div>

            <div className='hot-drinks-list-container'>
                <ul>
                    {
                        menu.hotDrinks.map((e) => (
                            <li key={e.name}>{e.name} <span>${e.price}</span></li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}
