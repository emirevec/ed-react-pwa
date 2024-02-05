import React from 'react'
import Product from './views/Product/Product'

function App (): JSX.Element {
    const data = {
        id: 1,
        title: 'Anteojos',
        src: './src/images/products/glasses/Anteojos.jpg.webp',
        price: 500
    }
  return (
      <div className="App">
        <Product data={data}></Product>
      </div>
    )
}

export default App
