
import { menu } from '../helpers/menu'

import '../styles/ColdDrinks.css'


export const ColdDrinks = () => {
    return (
        <div className='cold-drinks-container'>

            <div className='cold-drinks-title-container'>
                <h3>Bebidas frias</h3>
            </div>

            <div className='cold-drinks-list-container'>
                <ul>
                    {
                        menu.coldDrinks.map((e) => (
                            <li key={e.name}>{e.name} <span>${e.price}</span></li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}
