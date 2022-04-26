import { CameraResolution, CameraResolutionValue } from 'src/store/types/main-page-process';
import { DEFAULT_CAMERA_RESOLUTION_VALUE } from 'src/store/main-page-process/constants';

const resolutionValues: CameraResolutionValue[] = Object.values(CameraResolutionValue);
const resolutionTextMap = {
  [CameraResolutionValue['1mp']]: '1 МП',
  [CameraResolutionValue['3mp']]: '3 МП',
  [CameraResolutionValue['5mp']]: '5 МП',
  [CameraResolutionValue['7mp']]: '7 МП',
  [CameraResolutionValue['10mp']]: '10 МП',
};

export const makeCameraResolutions = (): CameraResolution[] =>
  resolutionValues.map((value, idx) => ({
    value,
    key: idx + 1,
    id: idx + 1,
    text: resolutionTextMap[value],
    isSelected: value === DEFAULT_CAMERA_RESOLUTION_VALUE,
  }));
