import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Rout: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={ Navbar }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout
