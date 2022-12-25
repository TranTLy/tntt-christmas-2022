import React, { memo } from 'react';
import ImageGallery from 'react-image-gallery';
import { ImgGallery } from '../../utils/type.utils';
import s from './ImgGalleryCommon.module.scss'

interface Props {
    images: ImgGallery[]
    thumbnailPosition?: 'bottom' | 'top' | 'left' | 'right'

}

const ImgGalleryCommon = memo(({ images, thumbnailPosition = 'left' }: Props) => {
    return (
        <div className={s.imgGalleryCommon}>
            <ImageGallery
                items={images}
                thumbnailPosition={thumbnailPosition}
                slideDuration={300}
                slideOnThumbnailOver={true}
                disableKeyDown={false}
            />
        </div>
    )
})

ImgGalleryCommon.displayName = 'ImgGalleryCommon'
export default ImgGalleryCommon
