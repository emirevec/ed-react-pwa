import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'

const Rout: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={ Home }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout
