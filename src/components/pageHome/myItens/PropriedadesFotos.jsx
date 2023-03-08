import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import img00 from '../../pageItem/imgs/garagem.jpg';
import img01 from '../../pageItem/imgs/garagemstore01.png';
import img02 from '../../pageItem/imgs/garagemstore02.jpg';
import img03 from '../../pageItem/imgs/garagemstore03.jpg';
import img04 from '../../pageItem/imgs/garagemstore04.jpg';
import img05 from '../../pageItem/imgs/garagemstore05.jpg';
import img06 from '../../pageItem/imgs/garagemstore06.jpg';
import img07 from '../../pageItem/imgs/garagemstore07.jpg';

import './MyItens.scss'
export default function ImgPropriedades() {
    return (
        <div className="galleria-de-fotos">
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
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
        </div >
    );
}
