import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

function Filters() {

  const {setFilters, filters} = useFilters()

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice  : event.target.value
    }))
  }

  const handleCategory = (event) => {
    setFilters(prevState => ({
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
        value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
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