import { useMutation } from '@tanstack/react-query';
import { axiosFormInstance } from '~/shared/api';
import { URL } from './home.constants';
import { BoardListRequestType } from './home.types';

export const useGetHomeBoardList = () => {
  return useMutation({
    mutationFn: async ({ boardSeq, size, createdDate }: BoardListRequestType) => {
      if (boardSeq) {
        return axiosFormInstance.get(
          `${URL.BOARD_LIST_WITH_SEQUENCE}?boardSeq=${boardSeq}${createdDate ? `&createdDate=${createdDate}` : ''}`,
        );
      }

      return axiosFormInstance.get(
        `${URL.BOARD_LIST}?sort=b.created_date,desc${size ? `&size=${size}` : ''}`,
      );
    },
  });
};
