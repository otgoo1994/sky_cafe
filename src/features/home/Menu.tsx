/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import { IconGardenCart, IconStarFilled } from '@tabler/icons-react';
import { Pagination } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeQuery, itemProductType, setProductType, categoryType } from '~/entities/home';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const [active, setActive] = useState<number>(1);
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLUListElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [menuList, setMenuList] = useState<setProductType[]>([]);
  const location = useLocation();

  const { data: producSettList } = useSuspenseQuery(HomeQuery.getSetProductList());
  const { data: categoryList } = useSuspenseQuery(HomeQuery.getCategoryList());

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

  useEffect(() => {
    if (producSettList && producSettList.data) {
      console.log(producSettList);
      const items = producSettList.data.filter(
        (item: setProductType) => item.category_id === active,
      );

      setMenuList(items);
    }
  }, [producSettList, active]);

  const handleMenu = (menu: number, e: React.MouseEvent<HTMLLIElement>) => {
    setActive(menu);
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const getIngredientsFromItems = (items: itemProductType[]) => {
    const names = items.map((item) => item.name).join(', ');
    return names;
  };

  return (
    <section className="section menu" ref={cardRef} id='menu'>
      <img src="/images/menu_bg.png" alt="" className="background-image" />
      <div className="dimmed" />

      <div className="main-title" ref={titleRef}>
        <div className="line" /> ХООЛНЫ ЦЭС <div className="line" />
      </div>

      <ul className="main-menu" ref={categoryRef}>
        {categoryList &&
          categoryList.data &&
          categoryList.data.map((menu: categoryType, index: number) => (
            <li
              onClick={(e: React.MouseEvent<HTMLLIElement>) => handleMenu(menu.seq, e)}
              data-type={active == menu.seq}
              key={`category-${menu.seq}`}
            >
              {menu.name}
            </li>
          ))}
      </ul>

      <div className="menu-mobile" ref={menuRef}>
        <div className="menu-mobile-container">
          {menuList.map((item: setProductType) => (
            <div className="item-container" key={`mobile-food-menu-${item.seq}`}>
              <div className="item">
                <div className="item-image">
                  <img src={`${baseUrl}/common/download/${item.file}`} alt="" className="" />
                </div>
                <div className="item-info">
                  <p className="name">{item.name}</p>
                  <p className="ingredients">
                    {item.items ? getIngredientsFromItems(item.items) : item.ingredients}
                  </p>
                  <p className="price">{item.price.toLocaleString()}₮</p>
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
          ))}
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
          {menuList.length > 0 ? (
            menuList.map((item: setProductType) => (
              <SwiperSlide key={`item-${item.seq}`}>
                <div className="card-container">
                  <div className="menu-card">
                    <img src={`${baseUrl}/common/download/${item.file}`} alt="" className="" />
                    <p className="name">{item.name}</p>
                    <p className="ingredients">dish ingredients</p>
                    <p className="price">{item.price.toLocaleString()}₮</p>
                    <ComButton
                      label="Сагсанд нэмэх"
                      variant="dark"
                      leftIcon={<IconGardenCart color="#FFFFFF" />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="menu-swiper-empty">hello</div>
          )}
        </Swiper>
      </div>
    </section>
  );
};
