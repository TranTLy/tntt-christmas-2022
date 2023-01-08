import { ImgGalleryCommon } from '@src/commons';
import CarouselCommon from '@src/commons/CarouselCommon/CarouselCommon';
import IconArrowLeft from '@src/icons/IconArrowLeft';
import IconArrowRight from '@src/icons/IconArrowRight';
import { Content, ImgGallery } from '@src/utils/type.utils';
import { useMemo, useRef, useState } from 'react';
import ContentItem from './components/ContentItem/ContentItem';
import Header from './components/Header/Header';
import s from './DataDetail.module.scss';

interface Props {
    data: Content[],
}

const DataDetail = ({ data }: Props) => {
    const contentRef = useRef<any>(null)
    const imgRef = useRef<any>(null)
    const [currentSlide, setCurrentSlide] = useState(0);

    // const isShowImg = useMemo(() => {
    //     return !!data[currentSlide].image
    // }, [data, currentSlide])

    const images = useMemo(() => {
        const rs: ImgGallery[] = data.map(item => {
            return {
                original: item.image.src,
                thumbnail: item.image.src,
            }
        })

        return rs
    }, [data])

    const handleImgSlideChange = (current) => {
        if (current !== contentRef.current.getCurrent()) {
            contentRef.current.goTo(current)
        }
        setCurrentSlide(current)
    }

    const handleContentSlideChange = (_, current) => {
        if (current !== imgRef.current.getCurrent()) {
            imgRef.current.goTo(current)
        }
    }

    const handleNext = () => {
        contentRef.current.next()
        imgRef.current.next()
    }

    const handlePrev = () => {
        contentRef.current.prev()
        imgRef.current.prev()
    }

    return (
        <div className={s.dataDetail}>
            <Header />
            <div className={s.content}>
                <div>
                    <CarouselCommon total={data?.length} carouselRef={contentRef} beforeChange={handleContentSlideChange} dots={false}>
                        {
                            data.map(item => <ContentItem key={item.id} data={item} />)
                        }

                    </CarouselCommon>

                </div>
                <div>
                    <ImgGalleryCommon
                        galleryRef={imgRef}
                        images={
                            images
                        }
                        onChange={handleImgSlideChange}
                    />

                </div>

                <button className={s.btnNext} onClick={handleNext}>
                    <IconArrowRight />
                </button>
                <button className={s.btnPrev} onClick={handlePrev}>
                    <IconArrowLeft />
                </button>
            </div>
        </div>
    );
};

export default DataDetail;