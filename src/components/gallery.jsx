import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import GalleryOne from '../assets/galleryOne.png';
import GalleryTwo from '../assets/galleryTwo.png';
import GalleryThree from '../assets/galleryThree.png';
import GalleryFour from '../assets/galleryFour.png';
import GalleryFive from '../assets/galleryFive.png';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function gallery() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1} 
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={GalleryOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GalleryTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GalleryThree} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GalleryFour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GalleryFive} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default gallery