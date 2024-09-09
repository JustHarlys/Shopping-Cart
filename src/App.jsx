import { data as productosIniciales} from './mocks/products.js'
import Products from './Components/Products.jsx'
import { useState } from 'react'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { IS_DEVELOPMENT } from '../config.js'
import { useFilters } from './hooks/useFilters.js'

let initialProducts = productosIniciales.products



function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer/>}
    </>
  )
}

export default App
