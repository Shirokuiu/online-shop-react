import { CarYear, CarYearValue } from 'src/store/types/main-page-process';
import { makeOptions } from 'src/components/shared/select/helpers/make-options';

const textMap = {
  [CarYearValue['1900']]: '1900',
  [CarYearValue['1940']]: '1940',
  [CarYearValue['1960']]: '1960',
  [CarYearValue['1980']]: '1980',
  [CarYearValue['2000']]: '2000',
};

export const makeCarYears = (): CarYear[] =>
  makeOptions(CarYearValue, CarYearValue['1900'], textMap);
