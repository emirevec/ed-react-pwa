import React from 'react'

const ButtonHamburguer = (): JSX.Element => {
    return (
        <button data-collapse-toggle="navbar-hamburger" type="button" className="block items-center justify-center p-2 w-10 h-10 text-sm text-normal rounded-lg border-2 border-lime-100 hover:bg-gradient-to-r hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    )
}

export default ButtonHamburguer
