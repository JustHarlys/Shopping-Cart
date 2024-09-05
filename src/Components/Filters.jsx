import React, { useState } from 'react'
import './Filters.css'

function Filters() {

  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">Precio a partir de: </label>
        <input 
        type="range" 
        id='price'
        min='0'
        max='1000'
        onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="Category">
          <select name="" id="category">
            <option value="all">Todas</option>
            <option value="laptops">Portatiles</option>
            <option value="smartphones">Celulares</option>
          </select>
        </label>
      </div>
    </section>
  )
}

export default Filters