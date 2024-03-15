import type { Prod } from '../../types/types'
import { ProductStar } from './'
import { ButtonAddToCart } from '../../components/Buttons'

const Product: React.FC<any> = ({ product, onClose }): JSX.Element => {
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
                        <div id={`product_${product?.id}`} className="relative w-full max-w-sm mx-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <button onClick={onClose} className="absolute top-0 right-0 m-2 p-2 text-gray-400 hover:text-gray-500">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            <img className="mt-4 p-8 rounded-t-lg" src={product?.src} alt="product image" />
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product?.title} </h5>
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
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {product?.price} </span>
                                    {product != null && <ButtonAddToCart item={product} addToCart={function (item: Prod): void {
                                        throw new Error('Function not implemented.')
                                    }} ></ButtonAddToCart>}
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
