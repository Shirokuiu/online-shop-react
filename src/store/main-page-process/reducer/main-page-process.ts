import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { makeCategories } from 'src/store/main-page-process/helpers/make-categories';
import { CategoryType, EstateTypeValue, InitialState } from 'src/store/types/main-page-process';
import { ActionType } from 'src/store/main-page-process/action-type';
import { changeFilterByCategory } from 'src/store/main-page-process/helpers/change-filter-by-category';
import { makeEstateType } from 'src/store/main-page-process/helpers/make-estate-type';
import { changeIsCheckedEstateType } from 'src/store/main-page-process/helpers/change-is-checked-estate-type';

const initialState: InitialState = {
  filter: {
    categories: makeCategories(),
    estateTypes: makeEstateType(),
  },
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    [ActionType.ChangeFilterCategory](state, { payload: category }: { payload: CategoryType }) {
      state.filter.categories = changeFilterByCategory(state.filter.categories, category);
    },
    [ActionType.ChangeEstateType](
      state,
      { payload: estateValues }: { payload: Array<EstateTypeValue> },
    ) {
      state.filter.estateTypes = changeIsCheckedEstateType(state.filter.estateTypes, estateValues);
    },
  },
});

export const { changeFilterCategory, changeEstateType } = mainPageProcess.actions;
