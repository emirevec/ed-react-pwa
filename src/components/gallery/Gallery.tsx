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
    console.log(category)

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
        try {
        const aux: ProductList = await dataSources.products.all()
        setProducts(aux)
        setFilteredProducts(aux)
        console.log('Fetch ok')
        } catch (error) {
            console.error('Error fetching products', error)
        }
    }
    void fetchData()
    }, [])

    useEffect(() => {
        if (filter === '' || filter === null) {
            setFilteredProducts(products)
            console.log('Filter is empty or null')
        } else {
            const aux = products.filter(item => item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            setFilteredProducts(aux)
            console.log('Filtered products was set')
        }
    }, [filter, products])

    useEffect(() => {
        if (category !== '' || category !== null) {
            const aux = products.filter(item => item.category.toLocaleLowerCase() === category?.toLocaleLowerCase())
            setFilteredProducts(aux)
            console.log('Category has a value and filtered product was set')
        } else {
            setFilteredProducts(products)
            console.log('Category is empty or null')
        }
    }, [category, products])

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
