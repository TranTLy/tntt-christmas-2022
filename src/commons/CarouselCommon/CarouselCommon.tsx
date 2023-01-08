import IconArrowLeft from "@src/icons/IconArrowLeft";
import IconArrowRight from "@src/icons/IconArrowRight";
import classNames from "classnames";
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
// import s from "./CarouselCommon.module.scss";
import s from './CarouselCommon.module.scss';
import Slider, { Settings } from "react-slick";

interface Props extends Settings {
    children: React.ReactNode,
    carouselRef?: any,
    dotPosition?: string,
    slidesToShowMobile?: number,
    slidesToShowTablet?: number,
    total: number,
    isScrollSingleSlide?: boolean,
    center?: boolean,
}

export const CarouselCommon = ({
    children,
    autoplay,
    dotPosition,
    carouselRef,
    dots = true,
    beforeChange,
    afterChange,
    slidesToShow = 1,
    slidesToShowMobile = 1,
    slidesToShowTablet = 1,
    total = 1,
    isScrollSingleSlide = false,
    swipeToSlide = true,
    infinite = true,
    arrows = false,
    center = false,
}: Props) => {
    const nodeRef = useRef<any>(null);
    const [slideNum, setSlideNum] = useState(slidesToShow);
    const [isShowNextArrow, setIsShowNextArrow] = useState(false);
    const [isShowPrevArrow, setIsShowPrevArrow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const infiniteValue = useMemo(() => {
        if (total <= slideNum) {
            return false;
        }
        return infinite;
    }, [slideNum, total, infinite]);

    useEffect(() => {
        if (total <= slideNum) {
            setIsShowNextArrow(false);
            setIsShowPrevArrow(false);
        } else {
            setIsShowNextArrow(true);
        }
    }, [total, slideNum]);

    const handleResize = useCallback(() => {
        // eslint-disable-next-line no-undef
        const width = window.innerWidth;
        if (width < 641) {
            setSlideNum(slidesToShowMobile);
        } else if (width < 1008) {
            setSlideNum(slidesToShowTablet);
        } else {
            setSlideNum(slidesToShow);
        }
    }, [slidesToShowMobile, slidesToShowTablet, slidesToShow]);

    useEffect(() => {
        handleResize();
    }, [handleResize]);

    useEffect(() => {
        handleResize();
    }, [handleResize]);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        window.addEventListener('resize', handleResize);

        return () => {
            // eslint-disable-next-line no-undef
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    useImperativeHandle(carouselRef, () => ({
        next: () => {
            nodeRef.current.slickNext();
        },

        prev: () => {
            nodeRef.current.slickPrev();
        },

        goTo: (index) => {
            nodeRef.current.slickGoTo(index);
        },

        getCurrent: () => {
            return currentIndex
        },
    }));
    //get the currentslide

    const handleChange = (firstIndexInView) => {
        afterChange && afterChange(firstIndexInView);
        if (total > slideNum) {
            if (firstIndexInView === 0) {
                setIsShowPrevArrow(false);
                setIsShowNextArrow(true);
            } else {
                setIsShowPrevArrow(true);
                if (firstIndexInView + slideNum >= total) {
                    setIsShowNextArrow(false);
                } else {
                    setIsShowNextArrow(true);
                }
            }
        }
    };

    const handleBeforeChange = (currentSlide, nextSlide) => {
        setCurrentIndex(nextSlide)
        beforeChange && beforeChange(currentSlide, nextSlide)
    };

    return (
        <Slider
            infinite={infiniteValue}
            ref={nodeRef}
            className={classNames(s.carousel, {
                arrows,
                center,
                [s['next-arrow']]: isShowNextArrow,
                [s['next-arrow']]: isShowPrevArrow,
            })}
            beforeChange={handleBeforeChange}
            afterChange={handleChange}
            autoplay={autoplay}
            // dotPosition={dotPosition}
            dots={dots}
            slidesToShow={slideNum}
            swipeToSlide={swipeToSlide}
            arrows={arrows}
            swipe
            // prevArrow={

            // }
            prevArrow={
                isShowPrevArrow ? (
                    <button>
                        <IconArrowLeft />
                    </button>
                ) : <div></div>
            }
            nextArrow={
                isShowNextArrow ? (
                    <button>
                        <IconArrowRight />
                    </button>
                ) : <div></div>
            }
            slidesToScroll={isScrollSingleSlide ? 1 : slideNum}
        >
            {children}
        </Slider>
    );
};
export default CarouselCommon;
