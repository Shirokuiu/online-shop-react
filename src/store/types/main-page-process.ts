import { Option } from 'src/components/shared/select/types';

export type InitialState = {
  filter: {
    categories: Category[];
    estateTypes: EstateType[];
  };
};

export type Category = Option;

export type EstateType = {
  key: number;
  id: string;
  name: string;
  label: string;
  value: EstateTypeValue;
  isChecked: boolean;
};

export enum EstateTypeValue {
  House = 'house',
  flat = 'flat',
  apartments = 'apartments',
}

export enum CategoryType {
  All = 'all',
  Estate = 'estate',
  Laptops = 'laptops',
  Camera = 'camera',
  Cars = 'cars',
}

export enum SearchParamsKey {
  Category = 'category',
  EstateType = 'estateType',
}
