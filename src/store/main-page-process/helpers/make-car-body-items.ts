import { CarBodyItem, CarBodyValue } from 'src/store/types/main-page-process';
import { makeCheckboxes } from 'src/components/shared/checkbox/helpers/make-checkboxes';

const labelMap = {
  [CarBodyValue.Sedan]: 'Седан',
  [CarBodyValue.Universal]: 'Универсал',
  [CarBodyValue.Hatchback]: 'Хэтчбэк',
  [CarBodyValue.Jeep]: 'Внедорожник',
  [CarBodyValue.Cupe]: 'Купэ',
};

export const makeCarBodyItems = (): CarBodyItem[] =>
  makeCheckboxes(CarBodyValue, 'car-body', labelMap);
