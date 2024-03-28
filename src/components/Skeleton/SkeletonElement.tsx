enum SekeletonType {
    Title = 'title',
    Image = 'image',
    Button = 'button',
    Text = 'text'
}

interface SkeletonElementProps {
    type: SekeletonType
}

const SkeletonElement: React.FC<SkeletonElementProps> = ({ type }) => {
    let typeClass = ''
    switch (type) {
        case SekeletonType.Title:
            typeClass = 'w-36 h-10 mb-2 bg-gray-400 animate-pulse rounded-md'
            break
        case SekeletonType.Image:
            typeClass = 'w-full h-80 bg-gray-400 animate-pulse rounded-t-lg'
            break
        case SekeletonType.Button:
            typeClass = 'w-36 h-8 mr-2 bg-gray-400 animate-pulse rounded-md'
            break
        case SekeletonType.Text:
            typeClass = 'w-24 h-8 bg-gray-400 animate-pulse rounded-md'
            break
        default:
            console.warn('Unknown skeleton element type')
    }

    return (
        <div className={typeClass}></div>
    )
}

export default SkeletonElement
