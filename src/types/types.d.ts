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

export interface CartIt {
    productId: string
    count: number
}

export type ItemCart = Prod & CartIt

interface mockData {
    getAllProducts: () => Promise<Prod[]>
    postCheckout: (checkoutData: any) => Promise<boolean>
}
