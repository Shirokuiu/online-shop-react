import { Option } from 'src/components/shared/select/types';

export type InitialState = {
  filter: {
    categories: Category[];
  };
};

export type Category = Option;

export enum CategoryType {
  All = 'all',
  Estate = 'estate',
  Laptops = 'laptops',
  Camera = 'camera',
  Cars = 'cars',
}
