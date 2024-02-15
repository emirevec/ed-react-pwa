import React from 'react'
import { type Prod } from '../../types/types'
import ButtonLink from '../Buttons/ButtonLink'

interface Props {
    product: Prod
}

const GalleryCard: React.FC<Props> = ({ product }) => {
    return (
    <div className="max-w-sm bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center h-auto max-w-full mb-3 overflow-hidden rounded-t-lg">
            <img className="max-w-fit h-80 rounded-t-lg" src={product.src} alt="" />
        </div>
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {product.title} </h5>
        <div className="flex items-center justify-between">
            <ButtonLink to={`/product/:${product.id}`} text='Details'></ButtonLink>
            <span className="text-3xl font-bold text-gray-900 dark:text-white"> $ {product.price} </span>
        </div>
    </div>
    )
}

export default GalleryCard
