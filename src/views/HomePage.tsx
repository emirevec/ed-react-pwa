import { Navbar } from '../components/Navbar'
import { Gallery } from '../components/Gallery'
import { Cart } from '../components/Cart'
import { useContext } from 'react'
import { EcommerceContext } from '../context'

const HomePage = (): JSX.Element => {
    const { showCart }: any = useContext(EcommerceContext)
    return (
        <>
        <Navbar></Navbar>
        <Gallery></Gallery>
        { showCart === true && <Cart></Cart> }
        </>
    )
}

export default HomePage
