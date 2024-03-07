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

// Remeber to check and delete
export interface CartIt {
    productId: string
    count: number
}

export type ItemCart = Prod & CartIt

export interface Cart {
    id: Prod['id']
    sizes: Prod['sizes']
    colors: Prod['colors']
    count: number
}

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

interface Payload {
    id: Prod['id']
    sizes: Prod['sizes']
    colors: Prod['colors']
}

interface CartItemAction extends Action {
    type: string
    payload: Payload
}
