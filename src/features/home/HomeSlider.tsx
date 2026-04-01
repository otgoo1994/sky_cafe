/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { ComButton } from '~/shared/ui/';
import {
  IconGardenCart,
  IconChevronRight,
  IconChevronCompactRight,
  IconChevronCompactLeft,
} from '@tabler/icons-react';
import Arrow from '../../../public/images/arrow.svg?react';
import { gsap } from 'gsap';
import { HomeQuery, bannerType } from '~/entities/home';
import { useSuspenseQuery } from '@tanstack/react-query';

export const HomeSlider = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { data: banners } = useSuspenseQuery(HomeQuery.getBanners());

  console.log(banners);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
  }, []);

  const handleChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
    const isMobile = window.innerWidth < 720;
    const activeIndex = swiper.activeIndex;

    swiper.slides.forEach((slide, index) => {
      const subTitle = slide.querySelector('.sub-title');
      const title = slide.querySelector('.title');
      const description = slide.querySelector('.description');
      const buttonContainer = slide.querySelector('.button-container');
      if (index !== activeIndex) {
        gsap.set(subTitle, { opacity: 0, y: 40 });
        gsap.set(title, { opacity: 0, y: 40 });
        gsap.set(description, { opacity: 0, y: 40 });
        gsap.set(buttonContainer, { opacity: 0, y: 40 });
      } else {
        gsap.fromTo(subTitle, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6 });
        gsap.fromTo(title, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
        gsap.fromTo(
          description,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.4 },
        );
        gsap.fromTo(
          buttonContainer,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.6 },
        );

        if (!isMobile) return;

        const theme = slide.dataset.theme;
        const header = document.querySelectorAll('.header .header-body-content svg');
        header.forEach((element) => {
          if (element) {
            if (theme === 'light') {
              element.classList.add('light');
              element.classList.remove('dark');
            } else {
              element.classList.add('dark');
              element.classList.remove('light');
            }
          }
        });
      }
    });
  };

  const handleNavigator = (direction: string) => {
    if (direction === 'prev') {
      swiperRef.current?.slidePrev();
      return;
    }

    swiperRef.current?.slideNext();
  };

  return (
    <section className="section home-slider h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        onSlideChange={handleChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {banners &&
          banners.data &&
          banners.data.map((banner: bannerType, index: number) => (
            <SwiperSlide data-theme="light" key={`main-banner-${index}`}>
              <img
                src={banner.theme === 'light' ? '/images/bg_2.png' : '/images/bg_blue.png'}
                alt=""
                className="background-image"
              />
              <div className={`grid col-2 slider-content ${banner.theme === 'light' && 'light'}`}>
                <div className="image mobile">
                  <div className="mobile-container">
                    <img src="/images/OB.png" alt="icon" />
                    <p className="image-title top">Нислэгийн амтыг таны гарт</p>
                    <p className="image-title bottom">Нисэх мэт шуурхай хүргэлт</p>
                  </div>
                </div>
                <div className="text">
                  <div className="sub-title">
                    <div className="line" /> НИСЛЭГИЙН АМТ{' '}
                    <img src="/images/ob_icon.png" alt="icon" className="icon" />
                  </div>
                  <div className="title">{banner.title}</div>
                  <p className="description">{banner.description}</p>
                  <div className="button-container">
                    <ComButton
                      label="Салбарууд"
                      variant="warning"
                      rightIcon={<IconChevronRight />}
                    />
                    {/* <ComButton label="Дэлгэрэнгүй" variant="primary" rightIcon={<IconChevronRight />} /> */}
                  </div>
                </div>
                <div className="image">
                  <img src={`${baseUrl}/common/download/${banner.file}`} alt="icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        {/* <SwiperSlide data-theme="dark">
          <img src="/images/bg_2.png" alt="" className="background-image" />
          <div className="grid col-2 slider-content light">
            <div className="image mobile">
              <div className="mobile-container">
                <img src="/images/set_b.png" alt="icon" />
              </div>
            </div>
            <div className="text">
              <div className="sub-title">
                <div className="line" /> НИСЛЭГИЙН АМТ{' '}
                <img src="/images/ob_icon.png" alt="icon" className="icon" />
              </div>
              <div className="title">sky café</div>
              <p className="description">
                Тэнгэрт мэт мэдрэмжийг таны ширээн дээр буулган амт, чанар, тав тухыг төгс
                хослуулсан орчноор дамжуулж бид таны өдөр тутмын мөчийг илүү үнэ цэнтэй болгоно
              </p>
              <div className="button-container">
                <ComButton label="Салбарууд" variant="warning" rightIcon={<IconChevronRight />} />
              </div>
            </div>
            <div className="image">
              <img src="/images/set_b.png" alt="icon" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-theme="dark">
          <img src="/images/bg_2.png" alt="" className="background-image" />
          <div className="grid col-2 slider-content light">
            <div className="image mobile">
              <div className="mobile-container">
                <img src="/images/set_a.png" alt="icon" />
              </div>
            </div>
            <div className="text">
              <div className="sub-title">
                <div className="line" /> НИСЛЭГИЙН АМТ{' '}
                <img src="/images/ob_icon.png" alt="icon" className="icon" />
              </div>
              <div className="title">sky café</div>
              <p className="description">
                Тэнгэрт мэт мэдрэмжийг таны ширээн дээр буулган амт, чанар, тав тухыг төгс
                хослуулсан орчноор дамжуулж бид таны өдөр тутмын мөчийг илүү үнэ цэнтэй болгоно
              </p>
              <div className="button-container">
                <ComButton label="Салбарууд" variant="warning" rightIcon={<IconChevronRight />} />
              </div>
            </div>
            <div className="image">
              <img src="/images/set_a.png" alt="icon" />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div
        className={`custom-prev ${currentIndex === 0 ? 'primary' : 'warning'}`}
        onClick={() => handleNavigator('prev')}
      >
        <div className="custom-navigate-container">
          <IconChevronCompactRight className="chevron" />
          <Arrow className="arrow" />
        </div>
      </div>
      <div
        className={`custom-next ${currentIndex === 0 ? 'primary' : 'warning'}`}
        onClick={() => handleNavigator('next')}
      >
        <div className="custom-navigate-container">
          <IconChevronCompactLeft className="chevron" />
          <Arrow className="arrow" />
        </div>
      </div>
    </section>
  );
};
