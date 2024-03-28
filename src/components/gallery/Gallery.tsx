import { useEffect, useState } from 'react'
import { type ProductList } from '../../types/types'
import { GalleryCard } from './'
import { withDataSources } from '../../context'
import { useQueryParams } from '../../hooks'
import { SkeletonGalleryCard } from '../Skeleton'

let Gallery: React.FC<any> = ({ dataSources }: any): JSX.Element => {
    const [products, setProducts] = useState<ProductList>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductList>([])
    const { filter, category } = useQueryParams()

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
            const aux: ProductList = await dataSources.products.all()
            setProducts(aux)
            console.log('Fetch ok')
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }
        void fetchData()
    }, [])

    useEffect(() => {
        if (category !== '' && category !== null) {
            const aux = products.filter(item => item.category.toLowerCase() === category.toLowerCase())
            setFilteredProducts(aux)
        } else {
            setFilteredProducts(products)
        }

        if (filter !== '' && filter !== null) {
            const aux = filteredProducts.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
            setFilteredProducts(aux)
        }
    }, [products, category, filter])

    return (
        <div className='flex justify-center'>
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-2">
                {/* <SkeletonGalleryCard/> */}
                {filteredProducts.length === 0 && <SkeletonGalleryCard/>}
                {filteredProducts.map((item) => (
                    <GalleryCard key={item.id} product={item} ></GalleryCard>
                ))}
            </div>
        </div>
    )
}

Gallery = withDataSources(Gallery)

export default Gallery
