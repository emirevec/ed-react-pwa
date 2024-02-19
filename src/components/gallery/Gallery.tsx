import React, { useContext } from 'react'
import { GalleryCard } from './'
import { useSearchParams } from 'react-router-dom'
import { EcommerceContext } from '../../context/EcommerceProvider'

const Gallery = (): JSX.Element => {
    let products = useContext(EcommerceContext)
    const [searchParams] = useSearchParams()
    const filter: string | null = searchParams.get('q')
    if (filter !== '' && filter != null) {
        products = products.filter(item => item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }
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
