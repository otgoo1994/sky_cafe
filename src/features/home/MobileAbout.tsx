/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
export const MobileAbout = () => {
  return (
    <section className="section only-mobile">
      <div className="mobile-about">
        <div className="card">
          <img src="/images/chef.jpg" alt="" className="avatar" />
          <p className="title">About us</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <img src="/images/airplane.png" alt="" className="airplane" />
        </div>
      </div>
    </section>
  );
};
