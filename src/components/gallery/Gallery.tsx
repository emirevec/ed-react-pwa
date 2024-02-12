import React from 'react'
import GalleryCard from './GalleryCard'

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

type ProductList = Product[]

interface Props {
    products: ProductList
}

const Gallery: React.FC<Props> = ({ products }) => {
    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-2">
                {products.map((item) => (
                        <GalleryCard key={item.id} product={item} ></GalleryCard>
                    )
                )}
            </div>
        </div>
    )
}

export default Gallery
