import { State } from 'src/store/types/state';
import { NameSpace } from 'src/store/constants';

export const getFilterCategories = (state: State) => state[NameSpace.MainPage].filter.categories;

export const getEstateTypes = (state: State) => state[NameSpace.MainPage].filter.estate.types;

export const getEstateSquare = (state: State) => state[NameSpace.MainPage].filter.estate.square;

export const getEstateRooms = (state: State) => state[NameSpace.MainPage].filter.estate.rooms;

export const getCameraTypes = (state: State) => state[NameSpace.MainPage].filter.camera.types;

export const getCameraResolutions = (state: State) =>
  state[NameSpace.MainPage].filter.camera.resolutions;
