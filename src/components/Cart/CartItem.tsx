import React from 'react'
import type { ItemCart } from '../../types/types'
import { cartDecreaseCount, cartIncreaseCount } from '../../redux/cart/actions'
import { connect } from 'react-redux'

interface props {
    item: ItemCart
}

let CartItem: React.FC<props> = ({ item, inc, dec }) => (
    <li className="cart_li flex py-6">
        <div
            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src={item.src}
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
                <div className="cart_decrease rounded-md border border-gray-300 bg-white px-3 py-1  text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => dec(item)}>-</div>
                <p className=" items-center text-gray-500"> {item.count} </p>
                <div className=" cart_increase rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => inc(item)}>+</div>
            </div>
            <div className="flex">
                <button id="{{this.id}}" type="button"
                    className="cart_remove_item font-medium text-strong hover:text-green-500">Remove</button>
            </div>
        </div>
    </li>
)

const mapDispatchTProps = (dispatch) => ({
    inc: (it) => dispatch(cartIncreaseCount(it.id, it.size, it.color))
    dec: (it) => dispatch(cartDecreaseCount(it.id, it.size, it.color))
})

CartItem = connect(null, mapDispatchTProps)(CartItem)

export default CartItem
