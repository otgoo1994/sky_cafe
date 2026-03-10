/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const MobileAbout = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const avatarRef = useRef<HTMLImageElement | null>(null);
  const airplaneRef = useRef<HTMLImageElement | null>(null);

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
    <section className="section only-mobile" ref={cardRef}>
      <div className="mobile-about">
        <div className="card">
          <img src="/images/chef.jpg" alt="" className="avatar" ref={avatarRef} />
          <p className="title" ref={titleRef}>
            About us
          </p>
          <p className="description" ref={descriptionRef}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <img src="/images/airplane.png" alt="" className="airplane" ref={airplaneRef} />
        </div>
      </div>
    </section>
  );
};
