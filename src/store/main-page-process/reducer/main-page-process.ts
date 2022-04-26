import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { makeCategories } from 'src/store/main-page-process/helpers/make-categories';
import {
  CategoryType,
  EstateRoomValue,
  EstateTypeValue,
  InitialState,
} from 'src/store/types/main-page-process';
import { ActionType } from 'src/store/main-page-process/action-type';
import { changeFilterByCategory } from 'src/store/main-page-process/helpers/change-filter-by-category';
import { makeEstateType } from 'src/store/main-page-process/helpers/make-estate-type';
import { changeIsCheckedEstateType } from 'src/store/main-page-process/helpers/change-is-checked-estate-type';
import { DEFAULT_ESTATE_SQUARE_NUM } from 'src/store/main-page-process/constants';
import { makeEstateRooms } from 'src/store/main-page-process/helpers/make-estate-rooms';
import { changeCheckedValueEstateRooms } from 'src/store/main-page-process/helpers/change-checked-value-estate-rooms';

const initialState: InitialState = {
  filter: {
    categories: makeCategories(),
    estate: {
      types: makeEstateType(),
      square: DEFAULT_ESTATE_SQUARE_NUM,
      rooms: makeEstateRooms(),
    },
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
      state.filter.estate.types = changeIsCheckedEstateType(
        state.filter.estate.types,
        estateValues,
      );
    },
    [ActionType.ChangeEstateSquare](state, { payload: squareNum }: { payload: number }) {
      state.filter.estate.square = squareNum;
    },
    [ActionType.ChangeEstateRoom](state, { payload: value }: { payload: EstateRoomValue }) {
      state.filter.estate.rooms = changeCheckedValueEstateRooms(state.filter.estate.rooms, value);
    },
  },
});

export const { changeFilterCategory, changeEstateType, changeEstateSquare, changeEstateRoom } =
  mainPageProcess.actions;
