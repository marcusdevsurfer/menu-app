
import { menu } from '../helpers/menu'

import '../styles/ColdDrinks.css'


export const ColdDrinks = () => {
    return (
        <div className='cold-drinks-container'>
            <div>
                <h3>Bebidas frias</h3>

            </div>
            <div>

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
