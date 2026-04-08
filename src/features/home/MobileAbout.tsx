/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";

export const MobileAbout = () => {
  const location = useLocation();
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const avatarRef = useRef<HTMLImageElement | null>(null);
  const airplaneRef = useRef<HTMLImageElement | null>(null);

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

    if (!cardRef.current) return;
    if (!titleRef.current) return;
    if (!descriptionRef.current) return;
    if (!avatarRef.current) return;
    if (!airplaneRef.current) return;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top bottom',
      onEnter: () => {
        gsap.fromTo(avatarRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.1 },
        );
        gsap.fromTo(
          descriptionRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.2 },
        );
        gsap.fromTo(
          airplaneRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.3 },
        );
      },
    });
  }, []);
  return (
    <section className="section only-mobile" ref={cardRef} id="mob-about">
      <div className="mobile-about">
        <div className="card">
          <img src="/images/chef.jpg" alt="" className="avatar" ref={avatarRef} />
          <p className="title" ref={titleRef}>
            Sky Café нь нислэгийн үйлчилгээний стандартыг өдөр тутмын хоол, кофены соёлтой
            хослуулсан онцгой орчин юм
          </p>
          <p className="description" ref={descriptionRef}>
            Бид эрүүл, зөв хооллолтыг дэмжихийн зэрэгцээ онгоцны үйлчилгээг таны ширээнд хүргэхийг
            эрхэм зорилгоо болгодог. Шинэхэн, чанартай орцыг нямбайлан сонгож, хариуцлагатайгаар
            бэлтгэсэн хоолыг үйлчлүүлэгч бүрд хүргэхийг зорьдог. Бидний хувьд эрүүл, тэнцвэртэй
            хооллолт нь зүгээр нэг сонголт бус, харин өдөр тутмын амьдралын хэв маяг юм. Иймээс
            манай кафед та зөвхөн амттай хоол төдийгүй, чанар, аюулгүй байдал, үйлчилгээний соёлыг
            нэг дороос мэдрэх боломжтой
          </p>
          <img src="/images/airplane.png" alt="" className="airplane" ref={airplaneRef} />
        </div>
      </div>
    </section>
  );
};
