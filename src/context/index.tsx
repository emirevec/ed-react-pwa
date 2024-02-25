import { createContext } from 'react'
import { type Prod } from '../types/types'

type ProductList = Prod[]

export const EcommerceContext = createContext<ProductList>([])

export const EcommerceProvider = EcommerceContext.Provider

export const withDataSources = (Component: React.ComponentType<any>): React.FC<any> => {
    const WithDataSources = (props: any): JSX.Element => (
    <EcommerceContext.Consumer>
        {
            (value) => <Component {...props} MockDataSource={value} />
        }
    </EcommerceContext.Consumer>
    )
    WithDataSources.displayName = `WithDataSources(${Component.displayName ?? Component.name})`

    return WithDataSources
}
