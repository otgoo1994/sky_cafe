/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart, IconStarFilled } from '@tabler/icons-react';
import { Pagination } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Menu = () => {
  const [active, setActive] = useState<string>('economy');
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLUListElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth < 720;

    if (!cardRef.current) return;
    if (!titleRef.current) return;
    if (!categoryRef.current) return;
    if (!swiperRef.current) return;
    if (!menuRef.current) return;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: isMobile ? 'top bottom' : 'top 90%',
      onEnter: () => {
        gsap.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(categoryRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(
          swiperRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, zIndex: 1, delay: 0.5 },
        );
        gsap.fromTo(menuRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      },
    });
  }, []);

  return (
    <section className="section menu" ref={cardRef}>
      <img src="/images/menu_bg.png" alt="" className="background-image" />
      <div className="dimmed" />

      <div className="main-title" ref={titleRef}>
        <div className="line" /> ХООЛНЫ ЦЭС <div className="line" />
      </div>

      <ul className="main-menu" ref={categoryRef}>
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

      <div className="menu-mobile" ref={menuRef}>
        <div className="menu-mobile-container">
          <div className="item-container">
            <div className="item">
              <div className="item-image">
                <img src="/images/set_1.png" alt="" className="" />
              </div>
              <div className="item-info">
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="light"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
            <div className="rating">
              <Rating
                defaultValue={4}
                icon={<IconStarFilled style={{ color: '#1075ff' }} />}
                emptyIcon={<IconStarFilled style={{ color: '#FFFFFF' }} />}
                readOnly
              />
              (30 Reviews)
            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <div className="item-image">
                <img src="/images/set_1.png" alt="" className="" />
              </div>
              <div className="item-info">
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="light"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
            <div className="rating">
              <Rating
                defaultValue={4}
                icon={<IconStarFilled style={{ color: '#1075ff' }} />}
                emptyIcon={<IconStarFilled style={{ color: '#FFFFFF' }} />}
                readOnly
              />
              (30 Reviews)
            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <div className="item-image">
                <img src="/images/set_1.png" alt="" className="" />
              </div>
              <div className="item-info">
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="light"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
            <div className="rating">
              <Rating
                defaultValue={4}
                icon={<IconStarFilled style={{ color: '#1075ff' }} />}
                emptyIcon={<IconStarFilled style={{ color: '#FFFFFF' }} />}
                readOnly
              />
              (30 Reviews)
            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <div className="item-image">
                <img src="/images/set_1.png" alt="" className="" />
              </div>
              <div className="item-info">
                <p className="name">FOOD NAME</p>
                <p className="ingredients">dish ingredients</p>
                <p className="price">25,000₮</p>
                <ComButton
                  label="Сагсанд нэмэх"
                  variant="light"
                  leftIcon={<IconGardenCart color="#FFFFFF" />}
                />
              </div>
            </div>
            <div className="rating">
              <Rating
                defaultValue={4}
                icon={<IconStarFilled style={{ color: '#1075ff' }} />}
                emptyIcon={<IconStarFilled style={{ color: '#FFFFFF' }} />}
                readOnly
              />
              (30 Reviews)
            </div>
          </div>
        </div>
      </div>

      <div className="menu-swiper-container" ref={swiperRef}>
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
