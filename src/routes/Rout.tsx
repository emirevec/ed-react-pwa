import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Product from '../views/Product/Product'
import Cart from '../views/Cart/Cart'

const Rout: React.FC = () => {
    const data = {
        id: 1,
        title: 'Glasses',
        src: 'public/src/images/products/glasses/Anteojos.jpg.webp',
        price: 500
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/product' element={ <Product data={data} /> }/>
                <Route path='/cart' element={ <Cart/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout
