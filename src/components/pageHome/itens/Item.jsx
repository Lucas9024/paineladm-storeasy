import React from 'react';
import './Item.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import armazem from '../img/armazem.png';
import espaco from '../img/espaco.png';
import quarto from '../img/quarto.png';
import garagem from '../img/garagem.png';
import garagemNautica from '../img/garagemNautica.png';
import pet from '../img/pet.png';
import Typing from 'react-typing-animation';

const Item = () => {
    return (
        <div className="Item">
            <h1
                style={{
                    fontFamily: 'Lato',
                    color: '#494949',
                    textAlign: 'center',
                    fontWeight: '500',
                    marginBottom: '30px',
                    fontSize: '1.56em',
                }}
            >
                <Typing>
                    Qual categoria atende suas necessidades de armazenamento?
                </Typing>
            </h1>

            <ul className="List">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className="Categories">
                        <li>
                            <img
                                src={armazem}
                                draggable="false"
                                alt="icone de armazem"
                            />

                            <p>Armazém</p>
                            <div className="line"></div>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className="Categories1">
                        <li>
                            <img
                                src={espaco}
                                draggable="false"
                                alt="icone de armazem"
                            />
                            <p>Espaços pequenos</p>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className="Categories2">
                        <li>
                            <img
                                src={quarto}
                                draggable="false"
                                alt="icone de armazem"
                            />
                            <p>Quartos</p>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className="Categories3">
                        <li>
                            <img
                                src={garagem}
                                draggable="false"
                                alt="icone de armazem"
                            />
                            <p>Garagem</p>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className="Categories4">
                        <li>
                            <img
                                src={garagemNautica}
                                draggable="false"
                                alt="icone de armazem"
                            />
                            <p>Garagem náutica</p>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide className="Categories5">
                        <li>
                            <img
                                src={pet}
                                draggable="false"
                                alt="icone de armazem"
                            />
                            <p>Pet</p>
                        </li>
                    </SwiperSlide>
                </Swiper>
            </ul>
        </div>
    );
};

export default Item;
