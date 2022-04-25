import { EstateRoom, EstateRoomValue } from 'src/store/types/main-page-process';

export const changeCheckedValueEstateRooms = (
  estateRooms: EstateRoom[],
  value: EstateRoomValue,
): EstateRoom[] =>
  estateRooms.map((room) => ({
    ...room,
    checkedValue: value,
  }));
