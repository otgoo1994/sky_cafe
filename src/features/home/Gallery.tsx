/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart } from '@tabler/icons-react';
import { useState } from 'react';

export const Gallery = () => {
  const images = [
    { src: '/images/gallery_2.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_3.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_4.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_2.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_3.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_3.png', title: 'FOOD GALLERY' },
  ];
  return (
    <section className="section gallery h-full">
      <img src="/images/gallery_bg.png" alt="" className="background-image" />
      <div className="food-grid">
        {images.map((item, i) => (
          <div className={`item ${i == 0 && 'item1'} ${i == 2 && 'tall'}`} key={`flex-item-${i}`}>
            <img src={item.src} />
          </div>
        ))}
      </div>

      <Swiper
        slidesPerView="auto"
        breakpoints={{
          0: {
            spaceBetween: 20,
          },
          720: {
            spaceBetween: 50,
          },
        }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className={i % 2 == 0 ? 'slide-up' : 'slide-down'}>
            <div className="img-wrapper">
              <img src={item.src} alt="" />
              {/* {item.title && <span className="label">{item.title}</span>} */}
              <div className="shadow" />
              <div className="overlay">
                <div className="overlay-border">{item.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
