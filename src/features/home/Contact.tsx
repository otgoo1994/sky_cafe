/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComButton } from '~/shared/ui/';
import {
  IconChevronRight,
  IconMapPin2,
  IconMessageShare,
  IconPhoneCall,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandXFilled,
} from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeQuery, branchType } from '~/entities/home';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Contact = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const { data: branches } = useSuspenseQuery(HomeQuery.getBranchList());
  const year = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth < 720;

    if (!cardRef.current) return;
    if (!titleRef.current) return;
    if (!contactRef.current) return;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: isMobile ? 'top bottom' : 'top 90%',
      onEnter: () => {
        gsap.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(
          contactRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.5 },
        );
      },
    });
  }, []);

  return (
    <section className="section contact" ref={cardRef}>
      <img src="/images/sky.png" alt="" className="background-image" />
      <div className="dimmed" />

      <div className="contact-item only-desktop" ref={titleRef}>
        <div className="description">
          <div className="sub-title">
            <div className="line" /> НИСЛЭГИЙН АМТ
            <img src="/images/ob_icon.png" alt="icon" className="icon" />
          </div>
          <div className="button-container">
            <div className="title">sky café</div>
            <ComButton label="Захиалга өгөх" variant="primary" rightIcon={<IconChevronRight />} />
          </div>
        </div>
        <img src="/images/airplane.png" alt="" className="airplane" />
      </div>
      {branches && branches.data && (
        <div className="contact-item">
          <img src="/images/bg_dark_blue.png" alt="" className="background" />
          <div className="contact-item-info" ref={contactRef}>
            <img src="/images/logo.png" alt="" className="logo" />
            <ul className="schedule">
              <li className="title">Салбарууд</li>
              {branches.data.map((branch: branchType, index: number) => (
                <li key={`branch-${branch.name}`}>
                  <p>
                    <a href={branch.link} target="_blank">
                      Салбар {index + 1} - {branch.name}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
            <ul className="contact-info">
              <li className="title">Холбоо барих</li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <IconBrandInstagram color="white" />
                </a>
                <a href="https://facebook.com" target="_blank">
                  <IconBrandFacebookFilled fill="white" />
                </a>
                <a href="https://x.com/skycafemn" target="_blank">
                  <IconBrandXFilled fill="white" />
                </a>
              </li>
              <li>
                <IconMessageShare />
                <p>
                  И-Мэйл
                  <br />
                  <span>contact@skycafe.mn</span>
                </p>
              </li>
              <li>
                <IconPhoneCall />
                <p>
                  Утас
                  <br />
                  <span>7777-1224</span>
                </p>
              </li>
            </ul>
            <img src="/images/set.png" alt="" className="set only-desktop" />
          </div>
          <div className="copyright">Copyright © {year} SKY CAFE. All Rights Reserved.</div>
        </div>
      )}
    </section>
  );
};
