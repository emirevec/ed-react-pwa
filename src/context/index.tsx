import { createContext } from 'react'
import { type ContextValue } from '../types/types'

export const EcommerceContext = createContext<ContextValue | undefined>(undefined)

export const EcommerceProvider = EcommerceContext.Provider

export const withDataSources = (Component: React.ComponentType<any>): React.FC<any> => {
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
