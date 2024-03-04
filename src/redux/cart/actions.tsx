import {
    CART_ADDITEM,
    CART_REMOVEITEM,
    CART_INCREASECOUNT,
    CART_DECREASECOUNT
} from './action_types'

export const cartAddItem = (id, sizes, colors) => ({
    type: CART_ADDITEM,
    payload: { id, sizes, colors }
})

export const cartRemoveItem = (id, sizes, colors) => ({
    type: CART_REMOVEITEM,
    payload: { id, sizes, colors }
})

export const cartIncreaseCount = (id, sizes, colors) => ({
    type: CART_INCREASECOUNT,
    payload: { id, sizes, colors }
})

export const cartDecreaseCount = (id, sizes, colors) => ({
    type: CART_DECREASECOUNT,
    payload: { id, sizes, colors }
})
