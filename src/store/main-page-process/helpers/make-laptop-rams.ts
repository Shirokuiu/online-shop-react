import { LaptopRam, LaptopRamValue } from 'src/store/types/main-page-process';
import { makeRadioBtns } from 'src/components/shared/radio-btn/helpers/make-radio-btns';

const labelMap = {
  [LaptopRamValue.Any]: 'Любой',
  [LaptopRamValue['4gb']]: '4 Гб',
  [LaptopRamValue['8gb']]: '8 Гб',
  [LaptopRamValue['16gb']]: '16 Гб',
};

export const makeLaptopRams = (): LaptopRam[] =>
  makeRadioBtns(LaptopRamValue, 'ram', LaptopRamValue.Any, labelMap);
