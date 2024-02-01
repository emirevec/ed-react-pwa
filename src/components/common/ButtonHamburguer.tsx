import React from 'react'

const ButtonHamburguer = (): JSX.Element => {
    return (
        <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-normal rounded-lg border-2 border-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    )
}

export default ButtonHamburguer
