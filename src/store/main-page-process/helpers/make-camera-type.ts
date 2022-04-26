import { CameraType, CameraValue } from 'src/store/types/main-page-process';

const types = Object.values(CameraValue);
const labelMap = {
  [CameraValue.Mirror]: 'Зеркальный',
  [CameraValue.Digital]: 'Цифровой',
  [CameraValue.Mirrorless]: 'Беззеркальный',
};

export const makeCameraType = (): CameraType[] =>
  types.map((type, idx) => ({
    key: idx + 1,
    id: type,
    value: type,
    name: 'camera-type',
    label: labelMap[type],
    isChecked: false,
  }));
