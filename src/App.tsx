import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EcommerceProvider from './context/EcommerceProvider'
import HomePage from './views/HomePage'
import ProductPage from './views/ProductPage'
import CartPage from './views/CartPage'

function App (): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <EcommerceProvider>
                    <Routes>
                        <Route path='/' element={ <HomePage/> }/>
                        <Route path='/product/:id' element={ <ProductPage/> }/>
                        <Route path='/cart' element={ <CartPage/> }/>
                    </Routes>
                </EcommerceProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
