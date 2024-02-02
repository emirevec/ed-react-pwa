import React from 'react'

const Cart = (): JSX.Element => {
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
                                    <button id="cart_close" type="button"
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                        <span className="absolute -inset-0.5"></span>
                                        <span className="sr-only">Close panel</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        Item
                                        <li className="cart_li flex py-6">
                                            <div
                                                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img src=""
                                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                    className="h-full w-full object-cover object-center"/>
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div
                                                        className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href="#">Descripción</a>
                                                        </h3>
                                                        <p className="ml-4"> Precio </p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500"> SKU:</p>
                                                    <p className="cart_item_id mt-1 text-sm text-gray-500"> Id </p>
                                                </div>
                                                <div className="flex items-center gap-1 p-2">
                                                    <p className=" items-center text-gray-500">Qty</p>
                                                    <button className="cart_decrease rounded-md border border-gray-300 bg-white px-3 py-1  text-sm font-medium text-gray-700 hover:bg-gray-50">-</button>
                                                    <p className=" items-center text-gray-500"> Count </p>
                                                    <button className=" cart_increase rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">+</button>
                                                </div>
                                                <div className="flex">
                                                    <button id="{{this.id}}" type="button"
                                                        className="cart_remove_item font-medium text-green-600 hover:text-green-500">Remove</button>
                                                </div>
                                            </div>
                                        </li>
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
                            <div className="mt-6">
                                <a href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-green-700 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Checkout</a>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or
                                    <button type="button" className="font-medium text-green-600 hover:text-green-500">
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
