import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import SwiperCore, { EffectCards } from 'swiper';
import { Global, css } from '@emotion/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/css/effect-cards';

// SwiperCore.use([EffectCards]);

export default function SwiperDefault() {
  return (
    <>
      <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Global
        styles={css`
          .swiper {
            width: 240px;
            height: 320px;
          }
          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            font-size: 22px;
            font-weight: bold;
            color: #fff;
          }
          .swiper-slide:nth-child(1n) {
            background-color: rgb(206, 17, 17);
          }
          .swiper-slide:nth-child(2n) {
            background-color: rgb(0, 140, 255);
          }
          .swiper-slide:nth-child(3n) {
            background-color: rgb(10, 184, 111);
          }
          .swiper-slide:nth-child(4n) {
            background-color: rgb(211, 122, 7);
          }
          .swiper-slide:nth-child(5n) {
            background-color: rgb(118, 163, 12);
          }
          .swiper-slide:nth-child(6n) {
            background-color: rgb(180, 10, 47);
          }
          .swiper-slide:nth-child(7n) {
            background-color: rgb(35, 99, 19);
          }
          .swiper-slide:nth-child(8n) {
            background-color: rgb(0, 68, 255);
          }
          .swiper-slide:nth-child(9n) {
            background-color: rgb(218, 12, 218);
          }
          .swiper-slide:nth-child(10n) {
            background-color: rgb(54, 94, 77);
          }
        `}
      />
    </>
  );
}