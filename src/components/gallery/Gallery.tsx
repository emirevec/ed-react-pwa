import { useState, useEffect } from 'react'
import { type Prod } from '../../types/types'
import { GalleryCard } from './'
import { useSearchParams } from 'react-router-dom'
import { MockDataSource } from '../../data/'

type ProductList = Prod[]

const Gallery = (): JSX.Element => {
    const [products, setProducts] = useState<ProductList>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductList>([])
    const [searchParams] = useSearchParams()
    const filter: string | null = searchParams.get('q')
    useEffect(() => {
        const fetchProdcutcs = async (): Promise<void> => {
            try {
                const api = MockDataSource()
                const allProducts = api.getAllProducts()
                setProducts(allProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        void fetchProdcutcs()
    }, [])
    useEffect(() => {
        if (filter !== '' && filter != null) {
            const filtered = products.filter(item => item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            setFilteredProducts(filtered)
        } else {
            setFilteredProducts(products)
        }
    }, [filter, products]
    )
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

export default Gallery

/* let products: ProductList =  */
