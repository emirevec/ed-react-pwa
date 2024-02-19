import { createContext } from 'react'

export const EcommerceContext = createContext('')

const EcommerceProvider = ({ children }) => {
    
    return (
        <EcommerceContext.Provider>
            { children }
        </EcommerceContext.Provider>
    )
}

export default EcommerceProvider
