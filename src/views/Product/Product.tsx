import React from 'react'
import ProductStar from './ProductStar'
import Button from '../../components/Buttons/Button'
import ButtonClose from '../../components/Buttons/ButtonClose'

interface Data {
    id: number
    title: string
    src: string
    price: number
}

interface Props {
    data: Data
}

const Product: React.FC<Props> = ({ data }) => {
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
                    <div id={`product_${data.id}`} className="relative w-full max-w-sm mx-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <ButtonClose></ButtonClose>
                        <a href="#">
                            <img className="mt-4 p-8 rounded-t-lg" src={data.src} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title} </h5>
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
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {data.price} </span>
                                <Button text="Add to cart"></Button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
