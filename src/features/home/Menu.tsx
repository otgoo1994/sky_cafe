/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart } from '@tabler/icons-react';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

export const Menu = () => {
  const [active, setActive] = useState<string>('economy');
  return (
    <section className="section menu">
      <img src="/images/menu_bg.png" alt="" className="background-image" />
      <div className="dimmed" />

      <div className="main-title">
        <div className="line" /> ХООЛНЫ ЦЭС <div className="line" />
      </div>

      <ul className="main-menu">
        <li onClick={() => setActive('economy')} data-type={active == 'economy'}>
          ECONOMY CLASS
        </li>
        <li onClick={() => setActive('business')} data-type={active == 'business'}>
          BUSINESS CLASS
        </li>
        <li onClick={() => setActive('breakfast')} data-type={active == 'breakfast'}>
          BREAKFAST
        </li>
        <li onClick={() => setActive('salad')} data-type={active == 'salad'}>
          SALAD
        </li>
      </ul>

      <div className="menu-swiper-container">
        <Swiper
          modules={[Pagination]}
          pagination
          breakpoints={{
            0: {
              slidesPerView: 'auto',
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide>
            <div className="card-container">
              <div className="menu-card">
                <img src="/images/cook.png" alt="" className="" />
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="dark"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="menu-card">
                <img src="/images/cook.png" alt="" className="" />
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="dark"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="menu-card">
                <img src="/images/cook.png" alt="" className="" />
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="dark"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="menu-card">
                <img src="/images/cook.png" alt="" className="" />
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="dark"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="menu-card">
                <img src="/images/cook.png" alt="" className="" />
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="dark"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="menu-card">
                <img src="/images/cook.png" alt="" className="" />
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="dark"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
