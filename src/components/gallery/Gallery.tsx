import { useEffect, useState } from 'react'
import { type ProductList } from '../../types/types'
import { GalleryCard } from './'
import { useLocation, useSearchParams } from 'react-router-dom'
import { withDataSources } from '../../context'

let Gallery: React.FC<any> = ({ dataSources }: any): JSX.Element => {
    const [products, setProducts] = useState<ProductList>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductList>([])
    const [searchParams] = useSearchParams()
    const filter: string | null = searchParams.get('q')
    const location = useLocation()
    const category: string | null = new URLSearchParams(location.search).get('category')

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-2">
                {filteredProducts.map((item) => (
                    <GalleryCard key={item.id} product={item} ></GalleryCard>
                )
                )}
            </div>
        </div>
    )
}

Gallery = withDataSources(Gallery)

export default Gallery
