import React from 'react'

const Gallery = (): JSX.Element => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 m-2">
            <img className="h-auto max-w-full rounded-lg" src=".\src\images\products\glasses\Anteojos.jpg.webp" alt="" />
            <img className="h-auto max-w-full rounded-lg" src=".\src\images\products\glasses\ali-pazani-GwglcplmXDs-unsplash.jpg.webp" alt="" />
            <img className="h-auto max-w-full rounded-lg" src=".\src\images\products\glasses\ethan-robertson-SYx3UCHZJlo-unsplash.jpg.webp" alt="" />
            <img className="h-auto max-w-full rounded-lg" src=".\src\images\products\glasses\stephanie-hau-P4TPjOXKqY8-unsplash.jpg.webp" alt="" />
        </div>
    )
}

export default Gallery
