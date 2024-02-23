import { createContext } from 'react'
import { type Prod } from '../types/types'
import { MockDataSource } from '../data'

type ProductList = Prod[]

export const EcommerceContext = createContext<ProductList>([])

interface EcommerceProviderProps {
    children: React.ReactNode
}

const EcommerceProvider: React.FC<EcommerceProviderProps> = ({ children }) => {
    const api = MockDataSource()
    const products: ProductList = api.getAllProducts()

    /* const [cartProducts, setCartProducts ] = useState<ProductList>([]) */

    return (
        <EcommerceContext.Provider value={
            products
        }>
            { children }
        </EcommerceContext.Provider>
    )
}

export default EcommerceProvider
