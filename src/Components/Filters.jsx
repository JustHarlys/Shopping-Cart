import { useState, useId } from 'react'
import './Filters.css'

function Filters({onChange}) {

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId - useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice  : event.target.value
    }))
  }

  const handleCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input 
        type="range" 
        id={minPriceFilterId}
        min='0'
        max='1000'
        onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>
          <select name="" id={categoryFilterId} onChange={handleCategory}>
            <option value="all">Todas</option>
            <option value="beauty">Belleza</option>
            <option value="groceries">Compras</option>
          </select>
        </label>
      </div>
    </section>
  )
}

export default Filters