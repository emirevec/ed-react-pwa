import { SkeletonElement } from './'

enum SkeletonType {
    Title = 'title',
    Image = 'image',
    Button = 'button',
    Text = 'text'
}

const SkeletonGalleryCard = (): JSX.Element => {
    return (
        <div className="max-w-full bg-gray-200 p-5 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex flex-col justify-center h-auto mb-3 overflow-hidden rounded-t-lg">
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
