import { Option } from 'src/components/shared/select/types';
import { Checkbox } from 'src/components/shared/checkbox/types';

export type InitialState = {
  filter: {
    categories: Category[];
    estate: {
      types: EstateType[];
      square: number;
      rooms: EstateRoom[];
    };
    camera: {
      types: CameraType[];
      resolutions: CameraResolution[];
    };
  };
};

export type Category = Option;

export type EstateType = Checkbox;

export type EstateRoom = {
  key: number;
  id: string;
  label: string;
  name: string;
  value: EstateRoomValue;
  checkedValue: EstateRoomValue;
};

export type CameraType = Checkbox;

export type CameraResolution = Option;

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

export enum CameraValue {
  Mirror = 'mirror',
  Digital = 'digital',
  Mirrorless = 'mirrorless',
}

export enum CameraResolutionValue {
  '1mp' = '1mp',
  '3mp' = '3mp',
  '5mp' = '5mp',
  '7mp' = '7mp',
  '10mp' = '10mp',
}
