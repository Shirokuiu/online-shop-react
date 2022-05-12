import { createSelector } from 'reselect';

import { State } from 'src/store/types/state';
import { NameSpace } from 'src/store/constants';
import { Category, CategoryType } from 'src/store/types/main-page-process';

export const getFilterCategories = (state: State) => state[NameSpace.MainPage].filter.categories;

export const getEstateTypes = (state: State) => state[NameSpace.MainPage].filter.estate.types;

export const getEstateSquare = (state: State) => state[NameSpace.MainPage].filter.estate.square;

export const getEstateRooms = (state: State) => state[NameSpace.MainPage].filter.estate.rooms;

export const getCameraTypes = (state: State) => state[NameSpace.MainPage].filter.camera.types;

export const getCameraResolutions = (state: State) =>
  state[NameSpace.MainPage].filter.camera.resolutions;

export const getCameraVideoResolutions = (state: State) =>
  state[NameSpace.MainPage].filter.camera.videoResolutions;

export const getLaptopTypes = (state: State) => state[NameSpace.MainPage].filter.laptop.types;

export const getLaptopRams = (state: State) => state[NameSpace.MainPage].filter.laptop.rams;

export const getLaptopDiagonals = (state: State) =>
  state[NameSpace.MainPage].filter.laptop.diagonals;

export const getLaptopProcessors = (state: State) =>
  state[NameSpace.MainPage].filter.laptop.processors;

export const getCarYears = (state: State) => state[NameSpace.MainPage].filter.car.years;

export const getCarTransmissions = (state: State) =>
  state[NameSpace.MainPage].filter.car.transmissions;

export const getCarBodyItems = (state: State) => state[NameSpace.MainPage].filter.car.bodyItems;

export const getActiveCategoryFilter = createSelector(
  [getFilterCategories],
  (categories: Category[]): CategoryType => {
    return (
      (categories.find((category) => category.isSelected)?.value as CategoryType) ??
      CategoryType.All
    );
  },
);
