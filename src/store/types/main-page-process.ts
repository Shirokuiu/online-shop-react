import { Option } from 'src/components/shared/select/types';

export type InitialState = {
  filter: {
    categories: Category[];
    estateTypes: EstateType[];
    estateSquare: number;
    estateRooms: EstateRoom[];
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

export type EstateRoom = {
  key: number;
  id: string;
  label: string;
  name: string;
  value: string;
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

export enum EstateRoomValue {
  Any = 'any',
  One = 'one',
  Two = 'two',
  Three = 'three',
  Four = 'four',
  Fivemore = 'fivemore',
}
