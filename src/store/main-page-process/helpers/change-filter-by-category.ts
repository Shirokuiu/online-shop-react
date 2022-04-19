import { Category, CategoryType } from 'src/store/types/main-page-process';

export const changeFilterByCategory = (
  categories: Category[],
  currentCategory: CategoryType,
): Category[] =>
  categories.map((category) => ({
    ...category,
    isSelected: category.value === currentCategory,
  }));
