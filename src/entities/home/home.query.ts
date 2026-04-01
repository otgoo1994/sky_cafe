import { queryOptions } from '@tanstack/react-query';
import { axiosInstance } from '~/shared/api';
import { URL } from './home.constants';

export const HomeQuery = {
  all: () => ['home'],
  getSetProductList: () =>
    queryOptions({
      queryKey: [...HomeQuery.all(), 'get-product'],
      queryFn: async () => {
        const response = await axiosInstance.get(`${URL.setProductList}`);

        return response.data;
      },
      retry: 1,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }),
  getCategoryList: () =>
    queryOptions({
      queryKey: [...HomeQuery.all(), 'get-category-list'],
      queryFn: async () => {
        const response = await axiosInstance.get(`${URL.categoryList}`);
        return response.data;
      },
      retry: 1,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }),

  getBranchList: () =>
    queryOptions({
      queryKey: [...HomeQuery.all(), 'get-branch-list'],
      queryFn: async () => {
        const response = await axiosInstance.get(`${URL.branch}`);
        return response.data;
      },
      retry: 1,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }),

  getBanners: () =>
    queryOptions({
      queryKey: [...HomeQuery.all(), 'get-banner-list'],
      queryFn: async () => {
        const response = await axiosInstance.get(`${URL.banner}`);
        return response.data;
      },
      retry: 1,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }),
};
