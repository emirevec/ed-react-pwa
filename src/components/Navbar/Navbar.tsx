import React from 'react'
import ButtonHamburguer from '../common/ButtonHamburguer'
import NavbarMenu from './NavbarMenu'
import ButtonCart from '../common/ButtonCart'
import SearchBar from './SearchBar'

const Navbar = (): JSX.Element => {
    const items = ['Store', 'Categories', 'Watchlist']

    return (
        <nav className="border-green-600 bg-gradient-to-r from-teal-200 to-lime-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./src/images/icons/icon-144x144.png" className="h-8" alt="Virtual Store Logo" />
                    <span className="self-center text-2xl text-normal font-semibold whitespace-nowrap dark:text-white">Virtual Sotre Plus</span>
                </a>
            </div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <ButtonHamburguer></ButtonHamburguer>
                <SearchBar></SearchBar>
                <ButtonCart></ButtonCart>
            </div>
            {<NavbarMenu items={items} ></NavbarMenu>}
        </nav>
    )
}

export default Navbar
