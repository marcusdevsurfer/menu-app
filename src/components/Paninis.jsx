import { menu } from "../helpers/menu"
import '../styles/Paninis.css'
export const Paninis = () => {
  const { description, ingredients, products } = menu.paninis
  const [item1, item2] = description
  return (
    <div className="paninis-container">

      <div className="paninis-description-container">
        <h3>Paninis</h3>
        <p>{item1}</p>
        <div className="paninis-products-container">
          <ul>
            {products.map(product => (
              <li key={product.name}>{product.name} $<span>{product.price}</span></li>
            ))}
          </ul>
        </div>
        <p>{item2}</p>
      </div>



      <section className="paninis-ingredients-section">

        <div className="paninis-ingredients-container">
          <h4>Ingredientes</h4>
          <ul>
            {ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>



      </section>



    </div>
  )
}
