/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeQuery, branchType } from '~/entities/home';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from "react-router-dom";

export const Gallery = () => {
  const location = useLocation();
  const cardRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const flexRef = useRef<HTMLDivElement | null>(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { data: branches } = useSuspenseQuery(HomeQuery.getBranchList());

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
    <section className="section gallery" ref={cardRef} id="branches">
      <img src="/images/gallery_bg.png" alt="" className="background-image only-desktop" />
      {branches && branches.data && (
        <div ref={swiperRef} className="swiperRef">
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
            {branches.data.map((item: branchType, i: number) => (
              <SwiperSlide key={i} className={i % 2 == 0 ? 'slide-up' : 'slide-down'}>
                <div className="img-wrapper">
                  <img src={`${baseUrl}/common/download/${item.file}`} alt="" />
                  {/* {item.title && <span className="label">{item.title}</span>} */}
                  <div className="shadow" />
                  <div className="overlay">
                    <div className="overlay-border">
                      <span className="overlay-border-title">Салбар {i + 1}</span>
                      <span>{item.name}</span>
                      <span className="overlay-border-title">ХАЯГ</span>
                      <span>
                        <a href={item.link} target="_blank">
                          {item.address}
                        </a>
                      </span>
                      <span className="overlay-border-title">цагийн хуваарь</span>
                      <span>
                        {item.first_day_of_work}-{item.last_day_of_work} {item.start_work_time}-
                        {item.end_work_time}
                      </span>
                      <span className="overlay-border-title">утас: {item.phone}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};
