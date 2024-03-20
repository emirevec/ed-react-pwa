import React from 'react'
import { ButtonLink } from '../Buttons'

interface Props {
    items: string[]
}

const NavbarMenu: React.FC<Props> = ({ items }) => {
    return (
        <div className="w-full border-t-2 border-normal mt-4" id="navbar-hamburger">
            <ul className="flex flex-wrap font-medium rounded-lg py-3 pl-2 dark:bg-gray-800 dark:border-gray-700">
                {items.map((item) => (
                <li key={`NavbarMenuItem${item}`}>
                    <ButtonLink to={`/gallery?category=${item}`} text={item}></ButtonLink>
                </li>
                ))
                }
            </ul>
        </div>
    )
}

export default NavbarMenu
