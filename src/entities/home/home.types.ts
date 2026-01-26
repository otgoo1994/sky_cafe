export type BoardListRequestType = {
  boardSeq?: number;
  categoryCd?: string | null;
  statusCd?: string | null;
  createdDate?: string;
  page?: number;
  size?: number;
};
