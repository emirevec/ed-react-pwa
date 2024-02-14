import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../views/HomePage'
import ProductPage from '../views/ProductPage'
import CartPage from '../views/CartPage'

const Rout: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <HomePage/> }/>
                <Route path='/product/:id' element={ <ProductPage/> }/>
                <Route path='/cart' element={ <CartPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout
