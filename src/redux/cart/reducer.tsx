import {
    CART_ADDITEM,
    CART_REMOVEITEM,
    CART_INCREASECOUNT,
    CART_DECREASECOUNT
} from './action_types'

const cartState = []

const cartReducer = (state = createState, action) => {
    let newState = state

    switch (action.type) {
        case CART_ADDITEM:
            newState.push({id: action.payload, count: 1})
            return newState
        case CART_INCREASECOUNT:
            newState = newState.map((item) => {
                if (item.id == action.payload) {
                    return {
                        id: it.id,
                        count: item.count + 1
                    }
                } else {
                    return item
                }
            })
            return newState
        case CART_REMOVEITEM:
            newState = newState.filter((item) => item.count != action.payload)
            return newState

        case CART_DECREASECOUNT:
            newState = newState.map((item) => {
                if (item.id == action.payload) {
                    return {
                        id: item.id,
                        count: item.count - 1
                    }
                } else {
                    return item
                }
            })

            newState = newState.filter((item) => item.count != 0)

            return newState
    }
}

export default cartReducer
