import { SkeletonElement } from './'
import { SkeletonType } from '../../types/types'

const SkeletonGalleryCard = (): JSX.Element => {
    return (
        <div className="max-w-sm bg-gray-200 p-5 border border-gray-300 rounded-lg shadow dark:animate-pulse dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center h-auto max-w-full mb-3 overflow-hidden rounded-t-lg">
                <SkeletonElement type={SkeletonType.Image}/>
                <SkeletonElement type={SkeletonType.Title}/>
                <div>
                    <SkeletonElement type={SkeletonType.Button}/>
                    <SkeletonElement type={SkeletonType.Text}/>
                </div>

            </div>
        </div>
    )
}

export default SkeletonGalleryCard
