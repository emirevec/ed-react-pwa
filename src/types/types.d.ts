export interface Prod {
    id: string
    title: string
    src: string
    price: number
    description: string
    sizes: string[]
    colors: string[]
    category: string
}

export type ProductList = Prod[]

export interface CartIt {
    productId: string
    count: number
}

export type ItemCart = Prod & CartIt

export interface mockData {
    getAllProducts: () => Promise<Prod[]>
    postCheckout: (checkoutData: any) => Promise<boolean>
}

export interface ContextValue {
    products: {
        all: () => Promise<Prod[]>
    }
    checkout: {
        post: (checkoutData: any) => Promise<boolean>
    }
}
