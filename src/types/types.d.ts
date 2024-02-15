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

export interface Cart {
    id: string
    title: string
    size: string
    color: string
    count: number
    price: number
}
