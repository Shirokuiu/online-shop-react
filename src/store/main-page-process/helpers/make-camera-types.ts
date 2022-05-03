import { CameraType, CameraValue } from 'src/store/types/main-page-process';
import { makeCheckboxes } from 'src/components/shared/checkbox/helpers/make-checkboxes';

const labelMap = {
  [CameraValue.Mirror]: 'Зеркальный',
  [CameraValue.Digital]: 'Цифровой',
  [CameraValue.Mirrorless]: 'Беззеркальный',
};

export const makeCameraTypes = (): CameraType[] =>
  makeCheckboxes(CameraValue, 'camera-type', labelMap);
