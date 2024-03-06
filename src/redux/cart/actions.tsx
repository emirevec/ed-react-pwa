import type { Prod, CartItemAction } from '../../types/types'

import {
    CART_ADDITEM,
    CART_REMOVEITEM,
    CART_INCREASECOUNT,
    CART_DECREASECOUNT
} from './action_types'

export const cartAddItem = (id: Prod['id'], sizes: Prod['sizes'], colors: Prod['colors']): CartItemAction => ({
    type: CART_ADDITEM,
    payload: { id, sizes, colors }
})

export const cartRemoveItem = (id: Prod['id'], sizes: Prod['sizes'], colors: Prod['colors']): CartItemAction => ({
    type: CART_REMOVEITEM,
    payload: { id, sizes, colors }
})

export const cartIncreaseCount = (id: Prod['id'], sizes: Prod['sizes'], colors: Prod['colors']): CartItemAction => ({
    type: CART_INCREASECOUNT,
    payload: { id, sizes, colors }
})

export const cartDecreaseCount = (id: Prod['id'], sizes: Prod['sizes'], colors: Prod['colors']): CartItemAction => ({
    type: CART_DECREASECOUNT,
    payload: { id, sizes, colors }
})
