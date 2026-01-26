/* eslint-disable import/no-extraneous-dependencies */
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';

export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getUserInfo = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;

  const user = jwtDecode(token);
  return user;
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<{ exp: number }>(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const timeDistanceMinute = (time: string) => {
  const date = dayjs(time);
  const now = dayjs(Date.now());
  const minute = now.diff(date, 'minute');
  return minute;
};

export const timeDistance = (time: string) => {
  const date = dayjs(time);
  const now = dayjs(Date.now());
  const day = now.diff(date, 'day');

  if (day > 30) {
    return date.format('YYYY.M.D');
  }

  if (day > 0) {
    return `${day}일 전`;
  }

  const hour = now.diff(date, 'hour');
  if (hour > 0) {
    return `${hour}시간 전`;
  }

  const min = now.diff(date, 'minute');
  if (min > 5) {
    return `${min}분 전`;
  }

  return `방금`;
};

export const isEmpty = (str: string) => {
  // return /^\s*$/.test(str);
  // return /^(?:\s|<br\s*\/?>|<p>\s*<br\s*\/?>\s*<\/p>|<p>\s*<br\s*\/?>\s*<\/p>)*$/i.test(str);
  return /^(?:\s|&nbsp;|<br\s*\/?>|<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>)*$/i.test(str);
};
