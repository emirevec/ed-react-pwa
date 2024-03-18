import { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { Gallery } from '../components/Gallery'
import { Cart } from '../components/Cart'
import { EcommerceContext } from '../context'

const HomePage = (): JSX.Element => {
    const { showCart } = useContext(EcommerceContext)
    return (
        <>
        <Navbar></Navbar>
        <Gallery></Gallery>
        { showCart && <Cart></Cart>}
        </>
    )
}

export default HomePage
