import { LaptopDiagonal, LaptopDiagonalValue } from 'src/store/types/main-page-process';
import { makeRadioBtns } from 'src/components/shared/radio-btn/helpers/make-radio-btns';

const labelMap = {
  [LaptopDiagonalValue.Any]: 'Любая',
  [LaptopDiagonalValue['13in']]: '13',
  [LaptopDiagonalValue['14in']]: '14',
  [LaptopDiagonalValue['15in']]: '15',
  [LaptopDiagonalValue['17in']]: '17',
};

export const makeLaptopDiagonals = (): LaptopDiagonal[] =>
  makeRadioBtns(LaptopDiagonalValue, 'diagonal', LaptopDiagonalValue.Any, labelMap);
