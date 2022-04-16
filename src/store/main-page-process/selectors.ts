import { createSelector } from 'reselect';

import { State } from 'src/store/types/state';
import { NameSpace } from 'src/store/constants';

export const getFilterCategories = (state: State) => state[NameSpace.MainPage].filter.categories;

export const getEstateTypes = (state: State) => state[NameSpace.MainPage].filter.estateTypes;
