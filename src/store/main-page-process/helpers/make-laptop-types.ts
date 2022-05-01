import { makeCheckboxes } from 'src/components/shared/checkbox/helpers/make-checkboxes';
import { LaptopTypeValue } from 'src/store/types/main-page-process';

const labelMap = {
  [LaptopTypeValue.Ultra]: 'Ультрабук',
  [LaptopTypeValue.Home]: 'Домашний ноутбук',
  [LaptopTypeValue.Gaming]: 'Игровой ноутбук',
};

export const makeLaptopTypes = () => makeCheckboxes(LaptopTypeValue, 'laptop-type', labelMap);
