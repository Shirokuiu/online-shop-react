import { CategoryType, EstateType, EstateTypeValue } from 'src/store/types/main-page-process';

const values = [EstateTypeValue.House, EstateTypeValue.flat, EstateTypeValue.apartments];
const labelMap = {
  [EstateTypeValue.House]: 'Дом',
  [EstateTypeValue.flat]: 'Квартира',
  [EstateTypeValue.apartments]: 'Апартаменты',
};

export const makeEstateType = (): EstateType[] =>
  values.map((value, idx) => ({
    key: idx + 1,
    id: value,
    name: value,
    label: labelMap[value],
    isChecked: false,
    value,
  }));
