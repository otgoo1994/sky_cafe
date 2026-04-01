export type categoryType = {
  seq: number;
  name: string;
};

export type itemProductType = {
  seq: number;
  name: string;
  file: number;
  price: number;
  ingredients: string;
  description: string;
  categorId: number;
};

export type setProductType = {
  seq: number;
  name: string;
  price: number;
  file: number;
  categoryId: number;
  ingredients: string;
  description: string;
  items: itemProductType[];
};

export type branchType = {
  seq: number;
  name: string;
  address: string;
  file: number;
  first_day_of_work: string;
  last_day_of_work: string;
  start_work_time: string;
  end_work_time: string;
  phone: string;
  link: string;
};

export type bannerType = {
  seq: number;
  title: string;
  file: number;
  description: string;
  theme: 'blue' | 'light';
};
