import {
    CART_ADDITEM,
    CART_REMOVEITEM,
    CART_INCREASECOUNT,
    CART_DECREASECOUNT
} from './action_types'

export const cartAddItem = (id) => ({
    type: CART_ADDITEM,
    payload: id
})

export const cartRemoveItem = (id) => ({
    type: CART_REMOVEITEM,
    payload: id
})

export const cartIncreaseCount = (id) => ({
    type: CART_INCREASECOUNT,
    payload: id
})

export const cartDecreaseCount = (id) => ({
    type: CART_DECREASECOUNT,
    payload: id
})
