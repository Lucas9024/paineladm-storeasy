import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import './Gallery.scss';

import img00 from '../imgs/garagem.jpg';
import img01 from '../imgs/garagemstore01.png';
import img02 from '../imgs/garagemstore02.jpg';
import img03 from '../imgs/garagemstore03.jpg';
import img04 from '../imgs/garagemstore04.jpg';
import img05 from '../imgs/garagemstore05.jpg';
import img06 from '../imgs/garagemstore06.jpg';
import img07 from '../imgs/garagemstore07.jpg';

const Gallery = () => {
    return (
        <div className="gallery">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="imgSliderGallery">
                    <img src={img00} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img01} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img02} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img03} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img04} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img05} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img06} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img07} />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Gallery;
