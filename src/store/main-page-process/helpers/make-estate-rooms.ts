import { EstateRoom, EstateRoomValue } from 'src/store/types/main-page-process';

const getValues = () => Object.values(EstateRoomValue).map((value) => value);

const labelMap = {
  [EstateRoomValue.Any]: 'Любое',
  [EstateRoomValue.One]: '1',
  [EstateRoomValue.Two]: '2',
  [EstateRoomValue.Three]: '3',
  [EstateRoomValue.Four]: '4',
  [EstateRoomValue.Fivemore]: '5+',
};

export const makeEstateRooms = (): EstateRoom[] => {
  const values = getValues();

  return values.map((value, idx) => ({
    key: idx + 1,
    id: value,
    value,
    name: 'room',
    label: labelMap[value],
    checkedValue: values[0],
  }));
};
