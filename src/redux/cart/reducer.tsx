import type { CartType, CartItemAction } from '../../types/types'
import {
    CART_ADDITEM,
    CART_REMOVEITEM,
    CART_INCREASECOUNT,
    CART_DECREASECOUNT
} from './action_types'

const cartState: CartType[] = []

const cartReducer = (state = cartState, action: CartItemAction): CartType[] => {
    let newState = state

    switch (action.type) {
        case CART_ADDITEM:{
            const aux: CartType = { ...action.payload, count: 1 }
            newState.push(aux)
            return newState
            }
        case CART_INCREASECOUNT:
            newState = newState.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...action.payload,
                        count: item.count + 1
                    }
                } else {
                    return item
                }
            })
            return newState

        case CART_REMOVEITEM:
            newState = newState.filter((item) => item.id !== action.payload.id)
            return newState

        case CART_DECREASECOUNT:
            newState = newState.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...action.payload,
                        count: item.count - 1
                    }
                } else {
                    return item
                }
            })

            newState = newState.filter((item) => item.count !== 0)

            return newState
    }
    return newState
}

export default cartReducer
