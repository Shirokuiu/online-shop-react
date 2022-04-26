import { EstateRoom, EstateRoomValue } from 'src/store/types/main-page-process';
import { makeRadioBtns } from 'src/components/shared/radio-btn/helpers/make-radio-btns';

const labelMap = {
  [EstateRoomValue.Any]: 'Любое',
  [EstateRoomValue.One]: '1',
  [EstateRoomValue.Two]: '2',
  [EstateRoomValue.Three]: '3',
  [EstateRoomValue.Four]: '4',
  [EstateRoomValue.Fivemore]: '5+',
};

export const makeEstateRooms = (): EstateRoom[] =>
  makeRadioBtns(EstateRoomValue, 'rooms', EstateRoomValue.Any, labelMap);
