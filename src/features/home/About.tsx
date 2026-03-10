/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!cardRef.current) return;
    if (!textRef.current) return;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(textRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(imgRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      },
    });
  }, []);

  return (
    <section className="section only-desktop" ref={cardRef}>
      <img src="/images/bg_flower.png" alt="" className="background-image" />
      <div className="container about">
        <div className="text" ref={textRef}>
          <div className="sub-title">
            <div className="line" /> БИДНИЙ ТУХАЙ
          </div>
          <div className="title">
            Органик, нислэгийн <br />
            хоолыг танд хүргэнэ.
          </div>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages.
          </p>
          <div className="quotes">
            <div>
              <img src="/images/chef.jpg" alt="" />
            </div>
            <span>
              There are many variations <br /> of passages of Lorem...
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
