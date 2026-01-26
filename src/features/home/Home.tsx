/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
export { Gallery } from './Gallery';
import { HomeSlider, About, Menu, Gallery, Contact } from '~/features/home';
export const Home = () => {
  return (
    <div>
      <HomeSlider />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
};
