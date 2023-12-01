import React from 'react'
import { menu } from '../helpers/menu'

import '../styles/HotDrinks.css'

export const HotDrinks = () => {
    return (
        <div className='hot-drinks-container'>
            <div>
                <h3>Bebidas calientes</h3>

            </div>

            <div>
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
