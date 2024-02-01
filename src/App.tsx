import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/gallery/Gallery'

function App (): JSX.Element {
  const items = ['Jeans', 'Sneakers']
  return (
    <div className="App">
      <Navbar></Navbar>
      <Gallery items={items}></Gallery>
    </div>
  )
}

export default App
