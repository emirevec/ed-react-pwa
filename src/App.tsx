import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'
import Cart from './components/Cart/Cart'

function App (): JSX.Element {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Gallery></Gallery>
      <Cart></Cart>
    </div>
  )
}

export default App
