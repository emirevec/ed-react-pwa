import React from 'react'
import { EcommerceProvider } from './context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProductPage, CartPage } from './views'
import { MockDataSource } from './data'

function App (): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <EcommerceProvider value={MockDataSource}>
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
