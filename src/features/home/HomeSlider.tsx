/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart, IconChevronRight } from '@tabler/icons-react';

export const HomeSlider = () => {
  return (
    <section className="section home-slider">
      <Swiper spaceBetween={0} slidesPerView={1}>
        <SwiperSlide>
          <img src="/images/bg_blue.png" alt="" className="background-image" />
          <div className="grid col-2 slider-content">
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
    </section>
  );
};
