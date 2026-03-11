/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef } from 'react';
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

export const HomeSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
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
        <SwiperSlide>
          <img src="/images/bg_blue.png" alt="" className="background-image" />
          <div className="grid col-2 slider-content">
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
              <div className="title">sky café</div>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard
              </p>
              <div className="button-container">
                <ComButton
                  label="Захиалга өгөх"
                  variant="warning"
                  rightIcon={<IconChevronRight />}
                />
                <ComButton label="Дэлгэрэнгүй" variant="primary" rightIcon={<IconChevronRight />} />
              </div>
            </div>
            <div className="image">
              <img src="/images/OB.png" alt="icon" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bg_blue.png" alt="" className="background-image" />
          <div className="grid col-2 slider-content">
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
              <div className="title">sky café</div>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard
              </p>
              <div className="button-container">
                <ComButton
                  label="Захиалга өгөх"
                  variant="warning"
                  rightIcon={<IconChevronRight />}
                />
                <ComButton label="Дэлгэрэнгүй" variant="primary" rightIcon={<IconChevronRight />} />
              </div>
            </div>
            <div className="image">
              <img src="/images/OB.png" alt="icon" />
            </div>
          </div>
        </SwiperSlide>
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
