import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { makeCategories } from 'src/store/main-page-process/helpers/make-categories';
import {
  CameraResolutionValue,
  CameraValue,
  CategoryType,
  EstateRoomValue,
  EstateTypeValue,
  InitialState,
} from 'src/store/types/main-page-process';
import { ActionType } from 'src/store/main-page-process/action-type';
import { makeEstateType } from 'src/store/main-page-process/helpers/make-estate-type';
import { changeIsCheckedEstateType } from 'src/store/main-page-process/helpers/change-is-checked-estate-type';
import { DEFAULT_ESTATE_SQUARE_NUM } from 'src/store/main-page-process/constants';
import { makeEstateRooms } from 'src/store/main-page-process/helpers/make-estate-rooms';
import { changeCheckedValueEstateRooms } from 'src/store/main-page-process/helpers/change-checked-value-estate-rooms';
import { makeCameraType } from 'src/store/main-page-process/helpers/make-camera-type';
import { changeCheckedValueCameraTypes } from 'src/store/main-page-process/helpers/change-checked-camera-type';
import { makeCameraResolutions } from 'src/store/main-page-process/helpers/make-camera-resolutions';
import { changeOption } from 'src/components/shared/select/helpers/change-option';

const initialState: InitialState = {
  filter: {
    categories: makeCategories(),
    estate: {
      types: makeEstateType(),
      square: DEFAULT_ESTATE_SQUARE_NUM,
      rooms: makeEstateRooms(),
    },
    camera: {
      types: makeCameraType(),
      resolutions: makeCameraResolutions(),
    },
  },
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    [ActionType.ChangeFilterCategory](state, { payload: category }: { payload: CategoryType }) {
      state.filter.categories = changeOption(state.filter.categories, category);
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
    [ActionType.ChangeCameraType](state, { payload: cameraValues }: { payload: CameraValue[] }) {
      state.filter.camera.types = changeCheckedValueCameraTypes(
        state.filter.camera.types,
        cameraValues,
      );
    },
    [ActionType.ChangeCameraResolution](
      state,
      { payload: resolution }: { payload: CameraResolutionValue },
    ) {
      state.filter.camera.resolutions = changeOption(state.filter.camera.resolutions, resolution);
    },
  },
});

export const {
  changeFilterCategory,
  changeEstateType,
  changeEstateSquare,
  changeEstateRoom,
  changeCameraType,
  changeCameraResolution,
} = mainPageProcess.actions;
