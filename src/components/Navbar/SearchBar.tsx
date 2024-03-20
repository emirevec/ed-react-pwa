import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SerachBar = (): JSX.Element => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = (e.target as HTMLInputElement).value
        setSearchQuery(inputValue)
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (searchQuery.trim() === '') {
                navigate('/')
            } else {
                navigate({
                    pathname: '/',
                    search: `?q=${searchQuery}`
                })
            }
        }
    }
    return (
        <form className="max-w-screen-xl mx-auto px-4">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-200 focus:border-teal-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search jeans, sneakers..." value={searchQuery} onChange={onInput} onKeyDown={onKeyDown} required/>
            </div>
        </form>
    )
}

export default SerachBar
