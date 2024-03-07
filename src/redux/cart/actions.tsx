import type { CartItemAction, Payload } from '../../types/types'

import {
    CART_ADDITEM,
    CART_REMOVEITEM,
    CART_INCREASECOUNT,
    CART_DECREASECOUNT
} from './action_types'

export const cartAddItem = (payload: Payload): CartItemAction => ({
    type: CART_ADDITEM,
    payload
})

export const cartRemoveItem = (payload: Payload): CartItemAction => ({
    type: CART_REMOVEITEM,
    payload
})

export const cartIncreaseCount = (payload: Payload): CartItemAction => ({
    type: CART_INCREASECOUNT,
    payload
})

export const cartDecreaseCount = (payload: Payload): CartItemAction => ({
    type: CART_DECREASECOUNT,
    payload
})
