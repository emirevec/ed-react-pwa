import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'

function App (): JSX.Element {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Gallery></Gallery>
    </div>
  )
}

export default App
