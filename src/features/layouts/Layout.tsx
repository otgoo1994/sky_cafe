/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { jwtDecode } from 'jwt-decode';
import { useLayout } from '~/shared/contexts';
import { Loading } from '~/shared/components';

export const Layout = () => {
  return (
    <div className="">
      <div className="">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
