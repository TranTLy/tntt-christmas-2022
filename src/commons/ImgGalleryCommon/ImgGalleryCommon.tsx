import classNames from 'classnames';
import React, { memo, useImperativeHandle, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { ImgGallery } from '../../utils/type.utils';
import s from './ImgGalleryCommon.module.scss'

interface Props {
    images: ImgGallery[]
    thumbnailPosition?: 'bottom' | 'top' | 'left' | 'right'
    onChange?: any,
    galleryRef?: any,

}

const ImgGalleryCommon = memo(({ images, thumbnailPosition = 'bottom', onChange, galleryRef }: Props) => {
    const nodeRef = useRef<any>(null);
    const [isFullScreen, setIsFullScreen] = useState();

    useImperativeHandle(galleryRef, () => ({
        next: () => {
            const current = nodeRef.current.getCurrentIndex()
            let next = current + 1
            if (next > images.length - 1) {
                next = 0
            }
            nodeRef.current.slideToIndex(next);
        },

        prev: () => {
            const current = nodeRef.current.getCurrentIndex()
            let next = current - 1
            if (next < 0) {
                next = images.length - 1
            }
            nodeRef.current.slideToIndex(next);
        },

        goTo: (index) => {
            nodeRef.current.slideToIndex(index);
        },

        getCurrent: () => {
            return nodeRef.current.getCurrentIndex()
        },
    }));

    const onScreenChange = (isOpen) => {
        setIsFullScreen(isOpen)
    }

    const onClick = (e) => {
        if (!isFullScreen) {
            nodeRef.current.fullScreen()
        }
    }

    return (
        <div className={classNames(s.imgGalleryCommon, {
            [s.full]: isFullScreen
        })}>
            <ImageGallery
                ref={nodeRef}
                items={images}
                thumbnailPosition={thumbnailPosition}
                slideDuration={300}
                slideOnThumbnailOver={true}
                disableKeyDown={false}
                onSlide={onChange}
                onScreenChange={onScreenChange}
                onClick={onClick}
            />
        </div>
    )
})

ImgGalleryCommon.displayName = 'ImgGalleryCommon'
export default ImgGalleryCommon
