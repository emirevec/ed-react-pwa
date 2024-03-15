import { createContext } from 'react'
import { type ContextValue } from '../types/types'

const EcommerceContext = createContext<ContextValue | undefined>(undefined)

const EcommerceProvider = EcommerceContext.Provider

const withDataSources = (Component: React.ComponentType<any>): React.FC<any> => {
    const WithDataSources = (props: any): JSX.Element => (
    <EcommerceContext.Consumer>
        {
            (value) => <Component {...props} dataSources={value} />
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
