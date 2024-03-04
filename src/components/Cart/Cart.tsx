import { useState, useEffect } from 'react'
import type { ProductList, CartIt, ItemCart } from '../../types/types'
import { CartItem } from './'
import { ButtonClose, ButtonLink } from '../Buttons'
import { withDataSources } from '../../context'
import { connect } from 'react-redux'

type CartItems = CartIt[]

let Cart: React.FC<any> = ({ dataSources, cartItemsSource }: any): JSX.Element => {
    const [products, setProducts] = useState<ProductList>([])

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

    const addedProducts = cartItemsSource.map(it => {
        const aux = products.find(i => i.id == it.id)
        if (aux == undefined) {
            return it
        } else {
            return {
                title: aux.title,
                size: it.size,
                color: it.color,
                price: aux.price,
                count: it.count
            }
        }
    }).map((val, index) => <CartItem key={index} item={val}></CartItem>)
    /* useEffect(() => {
        const add: Array<React.ReactElement<any, any>> = cartProducts.map((cProd): ItemCart => {
            const aux = products.find(i => i.id === cProd.productId)
            if (aux !== undefined) {
                return {
                    id: aux.id,
                    title: aux?.title,
                    src: aux?.src,
                    price: aux?.price,
                    description: aux?.description,
                    sizes: [],
                    colors: [],
                    category: aux?.category,
                    productId: cProd.productId,
                    count: cProd.count
                }
            } else {
                return {
                    id: '',
                    title: '',
                    src: '',
                    price: 0,
                    description: '',
                    sizes: [],
                    colors: [],
                    category: '',
                    productId: '',
                    count: 0
                }
            }
            }).map((val, index) => <CartItem key={index} item={val}></CartItem>)
            console.log(add)
        setAddedProducts(add)
    }, [products]) */
    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div id="cart_opacity" className="fixed inset-0 bg-gray-500 bg-opacity-100 transition-opacity ease-in-out duration-500 opacity-0"></div>
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div id="cart_slide"
                            className="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-0">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <ButtonClose></ButtonClose>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {addedProducts}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$ monto </p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="flex justify-center mt-6">
                                        <ButtonLink to='/' text="Checkout"></ButtonLink>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <br />
                                            <button type="button" className="font-medium text-strong hover:text-green-500">
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Cart = withDataSources(Cart)

const mapStateProps = (state) => ({
    cartItemsSource: state.cart
})

Cart = connect(mapStateProps)(Cart)

export default Cart
