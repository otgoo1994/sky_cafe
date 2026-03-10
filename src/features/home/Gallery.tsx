/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Gallery = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const flexRef = useRef<HTMLDivElement | null>(null);

  const images = [
    { src: '/images/gallery_2.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_3.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_4.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_2.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_3.png', title: 'FOOD GALLERY' },
    { src: '/images/gallery_3.png', title: 'FOOD GALLERY' },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth < 720;

    if (!cardRef.current) return;
    if (!flexRef.current) return;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: isMobile ? 'top bottom' : 'top 90%',
      onEnter: () => {
        gsap.fromTo(swiperRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(flexRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      },
    });
  }, []);

  return (
    <section className="section gallery h-full" ref={cardRef}>
      <img src="/images/gallery_bg.png" alt="" className="background-image only-desktop" />
      <div className="food-grid" ref={flexRef}>
        {images.map((item, i) => (
          <div className={`item ${i == 0 && 'item1'} ${i == 2 && 'tall'}`} key={`flex-item-${i}`}>
            <img src={item.src} />
          </div>
        ))}
      </div>

      <div ref={swiperRef} style={{ height: '100%' }}>
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
      </div>
    </section>
  );
};
