import { CameraResolution, CameraResolutionValue } from 'src/store/types/main-page-process';
import { DEFAULT_CAMERA_RESOLUTION_VALUE } from 'src/store/main-page-process/constants';
import { makeOptions } from 'src/components/shared/select/helpers/make-options';

const resolutionTextMap = {
  [CameraResolutionValue['1mp']]: '1 МП',
  [CameraResolutionValue['3mp']]: '3 МП',
  [CameraResolutionValue['5mp']]: '5 МП',
  [CameraResolutionValue['7mp']]: '7 МП',
  [CameraResolutionValue['10mp']]: '10 МП',
};

export const makeCameraResolutions = (): CameraResolution[] =>
  makeOptions(CameraResolutionValue, DEFAULT_CAMERA_RESOLUTION_VALUE, resolutionTextMap);
