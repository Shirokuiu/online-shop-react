import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { makeCategories } from 'src/store/main-page-process/helpers/make-categories';
import { CategoryType, InitialState } from 'src/store/types/main-page-process';
import { ActionType } from 'src/store/main-page-process/action-type';
import { changeFilterByCategory } from 'src/store/main-page-process/helpers/change-filter-by-category';

const initialState: InitialState = {
  filter: {
    categories: makeCategories(),
  },
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    [ActionType.ChangeFilterCategory](state, { payload: category }: { payload: CategoryType }) {
      state.filter.categories = changeFilterByCategory(state.filter.categories, category);
    },
  },
});

export const { changeFilterCategory } = mainPageProcess.actions;
