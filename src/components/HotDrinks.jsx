import React from 'react'
import { menu } from '../helpers/menu'

import '../styles/HotDrinks.css'

export const HotDrinks = () => {
    return (
        <div className='hot-drinks-container'>
            <h3>Bebidas calientes</h3>
            <ul>
                {
                    menu.hotDrinks.map((e) => (
                        <li key={e.name}>{e.name} <span>${e.price}</span></li>
                    ))
                }
            </ul>

        </div>
    )
}
