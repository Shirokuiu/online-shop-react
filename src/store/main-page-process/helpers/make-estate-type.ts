import { EstateType, EstateTypeValue } from 'src/store/types/main-page-process';
import { makeCheckboxes } from 'src/components/shared/checkbox/helpers/make-checkboxes';

const labelMap = {
  [EstateTypeValue.House]: 'Дом',
  [EstateTypeValue.flat]: 'Квартира',
  [EstateTypeValue.apartments]: 'Апартаменты',
};

export const makeEstateType = (): EstateType[] =>
  makeCheckboxes(EstateTypeValue, 'estate-type', labelMap);
