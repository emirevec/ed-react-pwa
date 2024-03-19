import { connect } from 'react-redux'
import { cartAddItem } from '../../redux/cart/actions'
import type { Prod, UnknownAction } from '../../types/types'
import type { Dispatch } from 'redux'
import { useContext } from 'react'
import { EcommerceContext } from '../../context'

interface DispatchProps {
    addToCart: (item: Prod) => void
}

interface ItemCartProps {
    item: Prod
}

type Props = ItemCartProps & DispatchProps

let AddToCartButton: React.FC<Props> = ({ item, addToCart }) => {
    const { toggleCart }: any = useContext(EcommerceContext)
    return (
        <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-normal text-gray-400 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 active:ring-2 active:outline-none active:ring-lime-200 dark:active:ring-lime-800" onClick={() => {
            addToCart(item)
            toggleCart()
        }}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Add to cart </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<UnknownAction>): DispatchProps => ({
    addToCart: (item) => dispatch(cartAddItem(item.id, ['s'], ['red']))
})

AddToCartButton = connect(null, mapDispatchToProps)(AddToCartButton)

export default AddToCartButton
