import { createContext, useState } from 'react'
import { type ContextValue } from '../types/types'
import DataSources from '../data'

const EcommerceContext = createContext<ContextValue | undefined>(undefined)

const EcommerceProvider = ({ children }: any): JSX.Element => {
    const [showCart, setShowCart] = useState(false)

    const toggleCart = (): void => {
        setShowCart(prevState => !prevState)
    }

    const contextValue: ContextValue = {
        DataSources,
        showCart,
        toggleCart
    }

    return (
        <EcommerceContext.Provider value={ contextValue }>
            { children }
        </EcommerceContext.Provider>
    )
}

const withDataSources = (Component: React.ComponentType<any>): React.FC<any> => {
    const WithDataSources = (props: any): JSX.Element => (
    <EcommerceContext.Consumer>
        {
            (value) => <Component {...props} dataSources={DataSources} />
        }
    </EcommerceContext.Consumer>
    )
    WithDataSources.displayName = `WithDataSources(${Component.displayName ?? Component.name})`

    return WithDataSources
}

export {
    EcommerceContext,
    EcommerceProvider,
    withDataSources
}
