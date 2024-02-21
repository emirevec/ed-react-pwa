import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProductPage, CartPage } from './views'

function App (): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                    <Route path='/cart' element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
