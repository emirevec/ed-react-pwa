import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EcommerceProvider } from './context'
import { HomePage } from './views'
import { Provider } from 'react-redux'
import store from './redux'

function App (): JSX.Element {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <EcommerceProvider>
                        <Routes>
                            <Route path='/' element={ <HomePage/> }/>
                        </Routes>
                    </EcommerceProvider>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App
