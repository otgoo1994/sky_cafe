/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";

export const About = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

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
    if (!textRef.current) return;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 90%',
      onEnter: () => {
        gsap.fromTo(textRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(imgRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      },
    });
  }, []);

  return (
    <section className="section only-desktop" ref={cardRef} id='about'>
      <img src="/images/bg_flower.png" alt="" className="background-image" />
      <div className="container about">
        <div className="text" ref={textRef}>
          <div className="sub-title">
            <div className="line" /> БИДНИЙ ТУХАЙ
          </div>
          <div className="title">
            Sky Café нь нислэгийн үйлчилгээний стандартыг өдөр тутмын хоол, кофены соёлтой
            хослуулсан онцгой орчин юм
          </div>
          <p className="description">
            Бид эрүүл, зөв хооллолтыг дэмжихийн зэрэгцээ онгоцны үйлчилгээг таны ширээнд хүргэхийг
            эрхэм зорилгоо болгодог. Шинэхэн, чанартай орцыг нямбайлан сонгож, хариуцлагатайгаар
            бэлтгэсэн хоолыг үйлчлүүлэгч бүрд хүргэхийг зорьдог. Бидний хувьд эрүүл, тэнцвэртэй
            хооллолт нь зүгээр нэг сонголт бус, харин өдөр тутмын амьдралын хэв маяг юм. Иймээс
            манай кафед та зөвхөн амттай хоол төдийгүй, чанар, аюулгүй байдал, үйлчилгээний соёлыг
            нэг дороос мэдрэх боломжтой
          </p>
          <div className="quotes">
            <div>
              <img src="/images/chef.jpg" alt="" />
            </div>
            <span>
              {/* There are many variations <br /> of passages of Lorem... */}
              Сайн байна уу, эрхэм зорчигчид оо. Sky Cafe-ийн нислэгт морилно уу. Танд амттай аялал,
              таатай нислэгийг хүсье.”
            </span>
          </div>
        </div>

        <div className="img-container" ref={imgRef}>
          <img src="/images/cook.png" alt="" className="image" />
        </div>
      </div>
    </section>
  );
};
