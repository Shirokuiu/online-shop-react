import { Category, CategoryType } from 'src/store/types/main-page-process';

const values = [
  CategoryType.All,
  CategoryType.Estate,
  CategoryType.Laptops,
  CategoryType.Camera,
  CategoryType.Cars,
];
const textMap = {
  [CategoryType.All]: 'Все',
  [CategoryType.Estate]: 'Недвижимость',
  [CategoryType.Laptops]: 'Ноутбуки',
  [CategoryType.Camera]: 'Фотоаппараты',
  [CategoryType.Cars]: 'Автомобили',
};

export const makeCategories = (): Category[] =>
  values.map((value, idx) => ({
    id: idx + 1,
    value,
    text: textMap[value],
    isSelected: value === 'all',
  }));
