import React from 'react'
import { Link } from 'react-router-dom'

const ButtonClose = (): JSX.Element => {
    return (
        <Link to='/' type="button" className="absolute top-0 right-0 m-2 p-2 text-gray-400 hover:text-gray-500">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Close panel</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </Link>
    )
}

export default ButtonClose
