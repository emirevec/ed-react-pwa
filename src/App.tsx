import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EcommerceProvider } from './context'
import DataSources from './data'
import { HomePage, ProductPage, CartPage } from './views'
import { Provider } from 'react-redux'
import store from './redux'

function App (): JSX.Element {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <EcommerceProvider value={DataSources}>
                        <Routes>
                            <Route path='/' element={ <HomePage/> }/>
                            <Route path='/product/:id' element={ <ProductPage/> }/>
                            <Route path='/cart' element={ <CartPage/> }/>
                        </Routes>
                    </EcommerceProvider>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App
