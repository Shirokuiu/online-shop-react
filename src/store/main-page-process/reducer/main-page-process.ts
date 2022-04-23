import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { makeCategories } from 'src/store/main-page-process/helpers/make-categories';
import { CategoryType, EstateTypeValue, InitialState } from 'src/store/types/main-page-process';
import { ActionType } from 'src/store/main-page-process/action-type';
import { changeFilterByCategory } from 'src/store/main-page-process/helpers/change-filter-by-category';
import { makeEstateType } from 'src/store/main-page-process/helpers/make-estate-type';
import { changeIsCheckedEstateType } from 'src/store/main-page-process/helpers/change-is-checked-estate-type';
import { DEFAULT_ESTATE_SQUARE_NUM } from 'src/store/main-page-process/constants';
import { makeEstateRooms } from 'src/store/main-page-process/helpers/make-estate-rooms';

const initialState: InitialState = {
  filter: {
    categories: makeCategories(),
    estateTypes: makeEstateType(),
    estateSquare: DEFAULT_ESTATE_SQUARE_NUM,
    estateRooms: makeEstateRooms(),
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
    [ActionType.ChangeEstateSquare](state, { payload: squareNum }: { payload: number }) {
      state.filter.estateSquare = squareNum;
    },
  },
});

export const { changeFilterCategory, changeEstateType, changeEstateSquare } =
  mainPageProcess.actions;
