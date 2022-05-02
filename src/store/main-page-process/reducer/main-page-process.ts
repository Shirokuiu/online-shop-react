import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants';
import { makeCategories } from 'src/store/main-page-process/helpers/make-categories';
import {
  CameraResolutionValue,
  CameraValue,
  CameraVideoResolutionValue,
  CategoryType,
  EstateRoomValue,
  EstateTypeValue,
  InitialState,
  LaptopDiagonalValue,
  LaptopRamValue,
  LaptopTypeValue,
} from 'src/store/types/main-page-process';
import { ActionType } from 'src/store/main-page-process/action-type';
import { makeEstateTypes } from 'src/store/main-page-process/helpers/make-estate-types';
import { DEFAULT_ESTATE_SQUARE_NUM } from 'src/store/main-page-process/constants';
import { makeEstateRooms } from 'src/store/main-page-process/helpers/make-estate-rooms';
import { makeCameraTypes } from 'src/store/main-page-process/helpers/make-camera-types';
import { makeCameraResolutions } from 'src/store/main-page-process/helpers/make-camera-resolutions';
import { changeOption } from 'src/components/shared/select/helpers/change-option';
import { changeCheckboxChecked } from 'src/components/shared/checkbox/helpers/change-checkbox-checked';
import { changeCheckedRadioBtn } from 'src/components/shared/radio-btn/helpers/change-checked-radio-btn';
import { makeCameraVideoResolutions } from 'src/store/main-page-process/helpers/make-camera-video-resolutions';
import { makeLaptopTypes } from 'src/store/main-page-process/helpers/make-laptop-types';
import { makeLaptopRams } from 'src/store/main-page-process/helpers/make-laptop-rams';
import { makeLaptopDiagonals } from 'src/store/main-page-process/helpers/make-laptop-diagonals';

const initialState: InitialState = {
  filter: {
    categories: makeCategories(),
    estate: {
      types: makeEstateTypes(),
      square: DEFAULT_ESTATE_SQUARE_NUM,
      rooms: makeEstateRooms(),
    },
    camera: {
      types: makeCameraTypes(),
      resolutions: makeCameraResolutions(),
      videoResolutions: makeCameraVideoResolutions(),
    },
    laptop: {
      types: makeLaptopTypes(),
      rams: makeLaptopRams(),
      diagonals: makeLaptopDiagonals(),
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
      state.filter.estate.types = changeCheckboxChecked(state.filter.estate.types, estateValues);
    },
    [ActionType.ChangeEstateSquare](state, { payload: squareNum }: { payload: number }) {
      state.filter.estate.square = squareNum;
    },
    [ActionType.ChangeEstateRoom](state, { payload: value }: { payload: EstateRoomValue }) {
      state.filter.estate.rooms = changeCheckedRadioBtn(state.filter.estate.rooms, value);
    },
    [ActionType.ChangeCameraType](state, { payload: cameraValues }: { payload: CameraValue[] }) {
      state.filter.camera.types = changeCheckboxChecked(state.filter.camera.types, cameraValues);
    },
    [ActionType.ChangeCameraResolution](
      state,
      { payload: resolution }: { payload: CameraResolutionValue },
    ) {
      state.filter.camera.resolutions = changeOption(state.filter.camera.resolutions, resolution);
    },
    [ActionType.ChangeCameraVideoResolution](
      state,
      { payload: videoResolution }: { payload: CameraVideoResolutionValue },
    ) {
      state.filter.camera.videoResolutions = changeOption(
        state.filter.camera.videoResolutions,
        videoResolution,
      );
    },
    [ActionType.ChangeLaptopType](
      state,
      { payload: laptopTypeValues }: { payload: LaptopTypeValue[] },
    ) {
      state.filter.laptop.types = changeCheckboxChecked(
        state.filter.laptop.types,
        laptopTypeValues,
      );
    },
    [ActionType.ChangeLaptopRam](state, { payload: ramValue }: { payload: LaptopRamValue }) {
      state.filter.laptop.rams = changeCheckedRadioBtn(state.filter.laptop.rams, ramValue);
    },
    [ActionType.ChangeLaptopDiagonal](
      state,
      { payload: diagonalValue }: { payload: LaptopDiagonalValue },
    ) {
      state.filter.laptop.diagonals = changeCheckedRadioBtn(
        state.filter.laptop.diagonals,
        diagonalValue,
      );
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
  changeCameraVideoResolution,
  changeLaptopType,
  changeLaptopRam,
  changeLaptopDiagonal,
} = mainPageProcess.actions;
