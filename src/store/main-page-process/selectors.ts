import { State } from 'src/store/types/state';
import { NameSpace } from 'src/store/constants';

export const getFilterCategories = (state: State) => state[NameSpace.MainPage].filter.categories;
