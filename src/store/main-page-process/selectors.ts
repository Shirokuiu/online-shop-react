import { createSelector } from 'reselect';

import { State } from 'src/store/types/state';
import { NameSpace } from 'src/store/constants';

export const getFilterCategories = (state: State) => state[NameSpace.MainPage].filter.categories;

export const getActiveCategoryValue = createSelector([getFilterCategories], (categories) => {
  return categories.find(({ isSelected }) => isSelected)?.value;
});
