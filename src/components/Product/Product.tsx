import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { Prod, ProductList } from '../../types/types'
import { ProductStar } from './'
import { ButtonAddToCart, ButtonClose } from '../../components/Buttons'
import { withDataSources } from '../../context'

let Product: React.FC<any> = ({ dataSources }: any): JSX.Element => {
    const [products, setProducts] = useState<ProductList>([])
    const { id } = useParams()
    const [prod, setProd] = useState<Prod>()

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const aux: ProductList = await dataSources.products.all()
                setProducts(aux)
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }
        void fetchData()
    }, [])

    useEffect(() => {
        const idParam = id?.substring(1)
        const aux = products.find(item => item.id === idParam)
        if (aux === undefined) {
            console.error('There is no product')
        } else {
            setProd(aux)
        }
    }, [id, products])

    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on modal state.
        Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
        Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0" */}
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-fit items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    {/* Modal panel, show/hide based on modal state.
                Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                To: "opacity-100 translate-y-0 md:scale-100"
                Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 md:scale-100"
                To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95" */}
                    <div className="flex justify-center w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div id={`product_${prod?.id}`} className="relative w-full max-w-sm mx-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <ButtonClose></ButtonClose>
                            <img className="mt-4 p-8 rounded-t-lg" src={prod?.src} alt="product image" />
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod?.title} </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <ProductStar color="yellow-300"></ProductStar>
                                        <ProductStar color="yellow-300"></ProductStar>
                                        <ProductStar color="yellow-300"></ProductStar>
                                        <ProductStar color="yellow-300"></ProductStar>
                                        <ProductStar color="gray-200"></ProductStar>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {prod?.price} </span>
                                    { prod != null && <ButtonAddToCart item={prod} addToCart={function (item: Prod): void {
                                        throw new Error('Function not implemented.')
                                    } } ></ButtonAddToCart>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Product = withDataSources(Product)

export default Product
