import React, { useState } from 'react'
import { type Prod } from '../../types/types'
import { ProductDetail } from '.'

interface Props {
    product: Prod
}

const GalleryCard: React.FC<Props> = ({ product }) => {
    const [showProductDetail, setShowProductDetail] = useState(false)
    const handleToggleShowProductDetail = (): any => {
        setShowProductDetail(!showProductDetail)
    }

    return (
        <>
            <div className="max-w-sm bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-center h-auto max-w-full mb-3 overflow-hidden rounded-t-lg">
                    <img className="max-w-fit h-80 rounded-t-lg" src={product.src} alt="" />
                </div>
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {product.title} </h5>
                <div className="flex items-center justify-between">
                    <button onClick={handleToggleShowProductDetail} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-normal text-gray-400 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 active:ring-2 active:outline-none active:ring-lime-200 dark:active:ring-lime-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Show Product Detail</span></button>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white"> $ {product.price} </span>
                </div>
            </div>
            {showProductDetail && <ProductDetail product={product} onClose={handleToggleShowProductDetail}></ProductDetail>}
        </>
    )
}

export default GalleryCard
