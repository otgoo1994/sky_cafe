import { queryOptions } from '@tanstack/react-query';
import { axiosInstance } from '~/shared/api';
import { URL } from './home.constants';

export const HomeQuery = {
  all: () => ['home'],
  getBoardListHome: () =>
    queryOptions({
      queryKey: [...HomeQuery.all(), 'getBoardListHome'],
      queryFn: async () => {
        const response = await axiosInstance.get(`${URL.TOP5_BOARD_LIST}`);

        return response.data;
      },
      retry: 1,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }),
};
