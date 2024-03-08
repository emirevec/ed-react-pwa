import type { Action } from 'redux'

// Product:
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

// Cart:

export interface CartType {
    id: Prod['id']
    sizes: Prod['sizes']
    colors: Prod['colors']
    count: number
}

export type ItemCart = Prod & CartType

interface ItemCartProps {
    item: ItemCart
}

// Provider

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

// Redux

interface Payload {
    id: Prod['id']
    sizes: Prod['sizes']
    colors: Prod['colors']
}

interface CartItemAction extends Action {
    type: string
    payload: Payload
}

type UnknownAction = CartItemAction | Action<any>
