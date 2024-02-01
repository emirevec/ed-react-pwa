import React from 'react'

const ButtonCart = (): JSX.Element => {
    return (
        <button type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-normal rounded-lg border-2 border-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Go to cart</span>
            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
        </button>
    )
}

export default ButtonCart
