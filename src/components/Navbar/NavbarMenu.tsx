interface Props {
    items: string[]
}

const NavbarMenu: React.FC<Props> = ({ items }) => {
    return (
        <div className=" w-full border-t-2 border-normal mt-4" id="navbar-hamburger">
            <ul className="flex flex-wrap font-medium rounded-lg py-3 pl-2 dark:bg-gray-800 dark:border-gray-700">
                {items.map((item) => (
                <li key={`NavbarMenuItem${item}`}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-normal text-gray-400 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 active:ring-2 active:outline-none active:ring-lime-200 dark:active:ring-lime-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {item}
                    </span>
                    </button>
                </li>
                ))
                }
            </ul>
        </div>
    )
}

export default NavbarMenu
