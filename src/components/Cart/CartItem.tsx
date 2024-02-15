import React from 'react'
import { type Cart } from '../../types/types'

interface props {
    item: Cart
}

const CartItem: React.FC<props> = ({ item }) => {
    return (
        <li className="cart_li flex py-6">
            <div
                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src=""
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    className="h-full w-full object-cover object-center" />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div
                        className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#"> {item.title} </a>
                        </h3>
                        <p className="ml-4"> {item.price} </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500"> SKU:</p>
                    <p className="cart_item_id mt-1 text-sm text-gray-500"> {item.id} </p>
                </div>
                <div className="flex items-center gap-1 p-2">
                    <p className=" items-center text-gray-500">Qty</p>
                    <button className="cart_decrease rounded-md border border-gray-300 bg-white px-3 py-1  text-sm font-medium text-gray-700 hover:bg-gray-50">-</button>
                    <p className=" items-center text-gray-500"> {item.count} </p>
                    <button className=" cart_increase rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50">+</button>
                </div>
                <div className="flex">
                    <button id="{{this.id}}" type="button"
                        className="cart_remove_item font-medium text-strong hover:text-green-500">Remove</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
