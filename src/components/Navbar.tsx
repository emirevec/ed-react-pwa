import React from 'react'

const Navbar = () => {
    return (
        <nav className="border-green-600 bg-theme dark:bg-green-900 dark:border-green-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./src/images/icons/icon-144x144.png" className="h-8" alt="Virtual Store Logo" />
                    <span className="self-center text-2xl text-normal font-semibold whitespace-nowrap dark:text-white">Virtual Sotre Plus</span>
                </a>
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-normal rounded-lg border-2 border-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className=" w-full border-t-2 border-normal mt-4" id="navbar-hamburger">
                    <ul className="flex flex-col font-medium rounded-lg pt-2 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-normal hover:bg-green-500 hover:text-green-50 rounded-md px-3 py-2 font-medium  focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2" aria-current="page">Store</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-normal hover:bg-green-500 hover:text-green-50 rounded-md px-3 py-2  font-medium focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2">Categories</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-normal hover:bg-green-500 hover:text-green-50 rounded-md px-3 py-2  font-medium focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2">Watchlist</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar