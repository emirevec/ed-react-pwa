interface Props {
    items: string[]
}

const NavbarMenu: React.FC<Props> = ({ items }) => {
    return (
        <div className=" w-full border-t-2 border-normal mt-4" id="navbar-hamburger">
            <ul className="flex flex-col font-medium rounded-lg pt-2 dark:bg-gray-800 dark:border-gray-700">
                {items.map((item) => (
                    <li key={`NavbarMenuItem${item}`}>
                        <a href="#" className="block py-2 px-3 text-normal hover:bg-green-500 hover:text-green-50 rounded-md px-3 py-2 font-medium  focus:outline-none focus:ring-2 focus:ring-green-200 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2" aria-current="page">{item}</a>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default NavbarMenu
