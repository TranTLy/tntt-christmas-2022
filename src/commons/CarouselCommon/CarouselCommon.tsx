import React from "react";
// import s from "./CarouselCommon.module.scss";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

interface Props {
    children: React.ReactNode
}

const CarouselCommon = ({ children }: Props) => {
    return (
        <div>
            <Slider {...settings}>
                {
                    children
                }

            </Slider>
        </div>
    );
};

export default CarouselCommon;
