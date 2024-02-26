import { useState } from 'react'
import { type Prod } from '../../types/types'
import { GalleryCard } from './'
import { useSearchParams } from 'react-router-dom'
import { withDataSources } from '../../context'

type ProductList = Prod[]

let Gallery: React.FC<any> = ({ dataSources }: any): JSX.Element => {
    const [products, setProducts] = useState<ProductList>([])
    const fetchData = async (): Promise<void> => {
        try {
        const aux: ProductList = await dataSources.products().all()
        console.log(aux)
        setProducts(aux)
        } catch (error) {
            console.error('Error fetching products', error)
        }
    }
    void fetchData()
    const [filteredProducts, setFilteredProducts] = useState<ProductList>([])
    const [searchParams] = useSearchParams()
    const filter: string | null = searchParams.get('q')
    if (filter !== '' && filter != null) {
        const filtered = products.filter(item => item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        setFilteredProducts(filtered)
    }
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
