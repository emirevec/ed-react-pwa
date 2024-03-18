import { useContext } from 'react'
import { EcommerceContext } from '../../context'

const ButtonCart = (): JSX.Element => {
    const { toggleCart }: any = useContext(EcommerceContext)
    return (
        <button onClick={toggleCart} className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg border-2 border-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-lime-300 focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-700" aria-expanded="false">
            <span className="sr-only">Go to cart</span>
            <svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <g id="Layer_1">
                    <g>
                        <path
                            d="M18.134,5.017c-0.29-0.218-0.565-0.345-0.856-0.345H4.181L3.986,3.853C3.906,3.371,3.489,3.017,3,3.017H2.75c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065C4.748,16.972,4.87,17,4.999,17C5,17,19,17,19,17c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.847l-0.166-1H18c0.498,0,0.92-0.366,0.99-0.858l1-7C20.031,5.854,19.945,5.563,19.134,5.017z M17.847,7l-0.285,2H14V7H17.847z M13,7v2H9V7H13z M13,10v2H9v-2H13z M9,7v2H6C5.947,9,5.899,9.015,5.852,9.03L5.514,7H9z M6.014,10H9v2H6.347L6.014,10z M14,12v-2h3.418l-0.285,2H14z" />
                        <circle cx="7.5" cy="19.5" r="1.5" />
                        <circle cx="16.5" cy="19.5" r="1.5" />
                    </g>
                </g>
            </svg>
        </button>
    )
}

export default ButtonCart
