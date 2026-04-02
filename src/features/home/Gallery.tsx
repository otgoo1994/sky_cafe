/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeQuery, branchType } from '~/entities/home';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Gallery = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const flexRef = useRef<HTMLDivElement | null>(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { data: branches } = useSuspenseQuery(HomeQuery.getBranchList());

  const images = [
    {
      src: '/images/gallery_2.png',
      title: 'Салбар 1',
      name: 'Буян-Ухаа салбар',
      address: 'УБ, Буянт-Ухаа нисэх буудлын баруун талд "Mongolian Airways" оффисийн 1 давхарт',
      days: 'да-ба',
      time: '08:00-18:00',
      phone: '7777-1224',
      link: 'https://maps.app.goo.gl/65fC6cknfYuX31WF9',
    },
    {
      src: '/images/gallery_3.png',
      title: 'Салбар 2',
      name: '1-р эмнэлэг салбар зүүн',
      address: 'УБ, Улсын 1-р эмнэлэгийн 2 давхарын зүүн жигүүрт "Үлэмж зоог"-т байрлаж байна',
      days: 'да-ба',
      time: '08:00-18:00',
      phone: '7777-1224',
      link: 'https://maps.app.goo.gl/WrYAcd43X7bShHx88',
    },
    {
      src: '/images/gallery_4.png',
      title: 'Салбар 3',
      name: '1-р эмнэлэг салбар баруун',
      address: 'УБ, Улсын 1-р эмнэлэгийн 2 давхарын баруун жигүүрт',
      days: 'да-ба',
      time: '08:00-18:00',
      phone: '7777-1224',
      link: 'https://maps.app.goo.gl/j1kcna2PCjEhP4bX7',
    },
    {
      src: '/images/gallery_2.png',
      title: 'Салбар 4',
      name: '3-р эмнэлэг салбар',
      address: 'УБ, Улсын 3-р эмнэлэгийн 1 давхарын баруун урд жигүүрт',
      days: 'да-ба',
      time: '08:00-18:00',
      phone: '7777-1224',
      link: 'https://maps.app.goo.gl/jvBMcg3zw5ka5ctw6',
    },
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
    <section className="section gallery" ref={cardRef}>
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
