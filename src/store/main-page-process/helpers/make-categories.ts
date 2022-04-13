import { Category, CategoryType } from 'src/store/types/main-page-process';

const values = [
  CategoryType.All,
  CategoryType.Estate,
  CategoryType.Laptops,
  CategoryType.Camera,
  CategoryType.Cars,
];
const textMap = {
  all: 'Все',
  estate: 'Недвижимость',
  laptops: 'Ноутбуки',
  camera: 'Фотоаппараты',
  cars: 'Автомобили',
};

export const makeCategories = (): Category[] =>
  values.map((value, idx) => ({
    id: idx + 1,
    value,
    text: textMap[value],
    isSelected: value === 'all',
  }));
