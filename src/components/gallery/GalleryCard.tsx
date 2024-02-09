import React from 'react'
import ButtonLink from '../Buttons/ButtonLink'

interface Product {
    id: number
    title: string
    src: string
    price: number
    description: string
    sizes: string[]
    colors: string[]
    category: string
}

interface Props {
    product: Product
}

const GalleryCard: React.FC<Props> = ({ product }) => {
    return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
            <img className="w-full h-80 rounded-t-lg" src={product.src} alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {product.title} </h5>
            <div className="flex items-center justify-between">
                <ButtonLink to={`/product/:${product.id}`} text='Details'></ButtonLink>
                <span className="text-3xl font-bold text-gray-900 dark:text-white"> {product.price} </span>
            </div>
        </div>
    </div>
    )
}

export default GalleryCard
