import { Option } from 'src/components/shared/select/types';
import { Checkbox } from 'src/components/shared/checkbox/types';
import { RadioBtn } from 'src/components/shared/radio-btn/types';

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
      videoResolutions: CameraVideResolution[];
    };
  };
};

export type Category = Option;

export type EstateType = Checkbox;

export type EstateRoom = RadioBtn;

export type CameraType = Checkbox;

export type CameraResolution = Option;

export type CameraVideResolution = Option;

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

export enum CameraVideoResolutionValue {
  Any = 'any',
  Hd = 'HD',
  FullHd = 'Full_HD',
  '4K' = '4K',
  '5K' = '5K',
}
