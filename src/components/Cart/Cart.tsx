import React from 'react'
import type { Prod, CartIt, ItemCart } from '../../types/types'
import CartItem from './CartItem'
import { ButtonClose, ButtonLink } from '../Buttons'

type CartItems = CartIt[]

type Products = Prod[]

const products: Products = [
    {
        id: '1',
        title: 'ALI',
        src: './src/images/products/glasses/ali-pazani-GwglcplmXDs-unsplash.jpg.webp',
        price: 318,
        description: 'ali-pazani-GwglcplmXDs-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '2',
        title: 'ANTEOJOS.JPG.WEBP',
        src: './src/images/products/glasses/Anteojos.jpg.webp',
        price: 331,
        description: 'Anteojos',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '3',
        title: 'APOSTOLOS',
        src: './src/images/products/glasses/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg.webp',
        price: 346,
        description: 'apostolos-vamvouras-mKi4QEJXRCs-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '4',
        title: 'CHARLES',
        src: './src/images/products/glasses/charles-deluvio-1-nx1QR5dTE-unsplash.jpg.webp',
        price: 388,
        description: 'charles-deluvio-1-nx1QR5dTE-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '5',
        title: 'CHASE',
        src: './src/images/products/glasses/chase-fade-WgjmiOxYKRQ-unsplash.jpg.webp',
        price: 684,
        description: 'chase-fade-WgjmiOxYKRQ-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '6',
        title: 'ETHAN',
        src: './src/images/products/glasses/ethan-robertson-SYx3UCHZJlo-unsplash.jpg.webp',
        price: 388,
        description: 'ethan-robertson-SYx3UCHZJlo-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '7',
        title: 'GIORGIO',
        src: './src/images/products/glasses/giorgio-trovato-K62u25Jk6vo-unsplash.jpg.webp',
        price: 206,
        description: 'giorgio-trovato-K62u25Jk6vo-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '8',
        title: 'KARSTEN',
        src: './src/images/products/glasses/karsten-winegeart-zgLydtnQmS4-unsplash.jpg.webp',
        price: 661,
        description: 'karsten-winegeart-zgLydtnQmS4-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '9',
        title: 'NOAH',
        src: './src/images/products/glasses/noah-black-1p3N5SHz0Hk-unsplash.jpg.webp',
        price: 656,
        description: 'noah-black-1p3N5SHz0Hk-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '10',
        title: 'SEBASTIAN',
        src: './src/images/products/glasses/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp',
        price: 704,
        description: 'sebastian-coman-travel-dtOTQYmTEs0-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '11',
        title: 'STEPHANIE',
        src: './src/images/products/glasses/stephanie-hau-P4TPjOXKqY8-unsplash.jpg.webp',
        price: 169,
        description: 'stephanie-hau-P4TPjOXKqY8-unsplash',
        sizes: [],
        colors: [],
        category: 'glasses'
    },
    {
        id: '12',
        title: 'ALI',
        src: './src/images/products/jeans/ali-pazani-Pdds9XsWyoM-unsplash.jpg.webp',
        price: 532,
        description: 'ali-pazani-Pdds9XsWyoM-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '13',
        title: 'ALICIA',
        src: './src/images/products/jeans/alicia-petresc-BciCcl8tjVU-unsplash.jpg.webp',
        price: 336,
        description: 'alicia-petresc-BciCcl8tjVU-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '14',
        title: 'CHRISTOPHER',
        src: './src/images/products/jeans/christopher-ivanov-h6jgQaBNIyA-unsplash.jpg.webp',
        price: 837,
        description: 'christopher-ivanov-h6jgQaBNIyA-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '15',
        title: 'DAVE',
        src: './src/images/products/jeans/dave-goudreau-UfYPR2UIOW4-unsplash.jpg.webp',
        price: 719,
        description: 'dave-goudreau-UfYPR2UIOW4-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '16',
        title: 'JEANS.JPG.WEBP',
        src: './src/images/products/jeans/jeans.jpg.webp',
        price: 321,
        description: 'jeans',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '17',
        title: 'JIMMY',
        src: './src/images/products/jeans/jimmy-jimenez-hGxReQwL5jE-unsplash.jpg.webp',
        price: 819,
        description: 'jimmy-jimenez-hGxReQwL5jE-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '18',
        title: 'JOSE',
        src: './src/images/products/jeans/jose-martinez-59wAqtRDSj0-unsplash.jpg.webp',
        price: 293,
        description: 'jose-martinez-59wAqtRDSj0-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '19',
        title: 'MARLON',
        src: './src/images/products/jeans/marlon-silva-EbyfUtxtEbc-unsplash.jpg.webp',
        price: 546,
        description: 'marlon-silva-EbyfUtxtEbc-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '20',
        title: 'SILVIU',
        src: './src/images/products/jeans/silviu-beniamin-tofan-spqwdZXzduU-unsplash.jpg.webp',
        price: 178,
        description: 'silviu-beniamin-tofan-spqwdZXzduU-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '21',
        title: 'TAMARA',
        src: './src/images/products/jeans/tamara-bellis-zDyJOj8ZXG0-unsplash.jpg.webp',
        price: 725,
        description: 'tamara-bellis-zDyJOj8ZXG0-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '22',
        title: 'VLADIMIR',
        src: './src/images/products/jeans/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg.webp',
        price: 917,
        description: 'vladimir-fedotov-MPfyh3xJ1iE-unsplash',
        sizes: [],
        colors: [],
        category: 'jeans'
    },
    {
        id: '23',
        title: 'ALEXANDRA',
        src: './src/images/products/sneakers/alexandra-gorn-CJ6SJO_yR5w-unsplash.jpg.webp',
        price: 242,
        description: 'alexandra-gorn-CJ6SJO_yR5w-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '24',
        title: 'ANDRES',
        src: './src/images/products/sneakers/andres-jasso-PqbL_mxmaUE-unsplash.jpg.webp',
        price: 343,
        description: 'andres-jasso-PqbL_mxmaUE-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '25',
        title: 'CALZADO.JPG.WEBP',
        src: './src/images/products/sneakers/Calzado.jpg.webp',
        price: 307,
        description: 'Calzado',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '26',
        title: 'CAMILA',
        src: './src/images/products/sneakers/camila-damasio-mWYhrOiAgmA-unsplash.jpg.webp',
        price: 331,
        description: 'camila-damasio-mWYhrOiAgmA-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '27',
        title: 'IMANI',
        src: './src/images/products/sneakers/imani-bahati-LxVxPA1LOVM-unsplash.jpg.webp',
        price: 513,
        description: 'imani-bahati-LxVxPA1LOVM-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '28',
        title: 'IRENE',
        src: './src/images/products/sneakers/irene-kredenets-dwKiHoqqxk8-unsplash.jpg.webp',
        price: 414,
        description: 'irene-kredenets-dwKiHoqqxk8-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '29',
        title: 'JACLYN',
        src: './src/images/products/sneakers/jaclyn-moy-ugZxwLQuZec-unsplash.jpg.webp',
        price: 956,
        description: 'jaclyn-moy-ugZxwLQuZec-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '30',
        title: 'JAKOB',
        src: './src/images/products/sneakers/jakob-owens-JzJSybPFb3s-unsplash.jpg.webp',
        price: 905,
        description: 'jakob-owens-JzJSybPFb3s-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '31',
        title: 'MOHAMMAD',
        src: './src/images/products/sneakers/mohammad-metri-E-0ON3VGrBc-unsplash.jpg.webp',
        price: 630,
        description: 'mohammad-metri-E-0ON3VGrBc-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '32',
        title: 'PAUL',
        src: './src/images/products/sneakers/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg.webp',
        price: 632,
        description: 'paul-gaudriault-a-QH9MAAVNI-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '33',
        title: 'WENGANG',
        src: './src/images/products/sneakers/wengang-zhai-_fOL6ebfECQ-unsplash.jpg.webp',
        price: 189,
        description: 'wengang-zhai-_fOL6ebfECQ-unsplash',
        sizes: [],
        colors: [],
        category: 'sneakers'
    },
    {
        id: '34',
        title: 'AMIR',
        src: './src/images/products/t-shirt/amir-babaei-0NK0FtJnIWE-unsplash.jpg.webp',
        price: 843,
        description: 'amir-babaei-0NK0FtJnIWE-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '35',
        title: 'CHELSEA',
        src: './src/images/products/t-shirt/chelsea-ferenando-r_-M00daj2Y-unsplash.jpg.webp',
        price: 885,
        description: 'chelsea-ferenando-r_-M00daj2Y-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '36',
        title: 'CHRISTIAN',
        src: './src/images/products/t-shirt/christian-bolt-VW5VjskNXZ8-unsplash.jpg.webp',
        price: 438,
        description: 'christian-bolt-VW5VjskNXZ8-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '37',
        title: 'FREE',
        src: './src/images/products/t-shirt/free-to-use-sounds-HXaCARJwKUQ-unsplash.jpg.webp',
        price: 193,
        description: 'free-to-use-sounds-HXaCARJwKUQ-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '38',
        title: 'JASON',
        src: './src/images/products/t-shirt/jason-yoder-CzZGxHUrOlI-unsplash.jpg.webp',
        price: 229,
        description: 'jason-yoder-CzZGxHUrOlI-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '39',
        title: 'MARCEL',
        src: './src/images/products/t-shirt/marcel-j-uWrCdB5sM-unsplash.jpg.webp',
        price: 461,
        description: 'marcel-j-uWrCdB5sM-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '40',
        title: 'MARCUS',
        src: './src/images/products/t-shirt/marcus-ganahl-EQIrev_NGH8-unsplash.jpg.webp',
        price: 510,
        description: 'marcus-ganahl-EQIrev_NGH8-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '41',
        title: 'NANDKISHORE',
        src: './src/images/products/t-shirt/nandkishore-sahu-6M14IWufRLw-unsplash.jpg.webp',
        price: 568,
        description: 'nandkishore-sahu-6M14IWufRLw-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '42',
        title: 'REMERAS.JPG.WEBP',
        src: './src/images/products/t-shirt/Remeras.jpg.webp',
        price: 902,
        description: 'Remeras',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '43',
        title: 'SINA',
        src: './src/images/products/t-shirt/sina-rezakhani-PMdtwPKWt5Q-unsplash.jpg.webp',
        price: 329,
        description: 'sina-rezakhani-PMdtwPKWt5Q-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    },
    {
        id: '44',
        title: 'TOM',
        src: './src/images/products/t-shirt/tom-cochereau-bf_CMgK8Pj0-unsplash.jpg.webp',
        price: 336,
        description: 'tom-cochereau-bf_CMgK8Pj0-unsplash',
        sizes: [],
        colors: [],
        category: 't-shirt'
    }
]
const cartProducts: CartItems = [
    {
        productId: '1',
        count: 1
    },
    {
        productId: '2',
        count: 1
    }
]

const Cart = (): JSX.Element => {
    const addedProducts = cartProducts.map((cProd): ItemCart => {
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
    }
    )
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
                                                {addedProducts.map(it => (
                                                    <CartItem key={it.id} item={it}></CartItem>
                                                )
                                                )
                                                }
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

export default Cart
