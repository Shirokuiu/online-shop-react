import { Category, CategoryType } from 'src/store/types/main-page-process';
import { makeOptions } from 'src/components/shared/select/helpers/make-options';

const textMap = {
  [CategoryType.All]: 'Все',
  [CategoryType.Estate]: 'Недвижимость',
  [CategoryType.Laptops]: 'Ноутбуки',
  [CategoryType.Camera]: 'Фотоаппараты',
  [CategoryType.Cars]: 'Автомобили',
};

export const makeCategories = (): Category[] =>
  makeOptions(CategoryType, CategoryType.All, textMap);
