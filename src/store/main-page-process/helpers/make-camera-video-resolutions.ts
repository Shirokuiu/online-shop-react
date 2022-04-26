import { makeOptions } from 'src/components/shared/select/helpers/make-options';
import { CameraResolution, CameraVideoResolutionValue } from 'src/store/types/main-page-process';

const labelMap = {
  [CameraVideoResolutionValue.Any]: 'Любое',
  [CameraVideoResolutionValue.Hd]: 'HD',
  [CameraVideoResolutionValue.FullHd]: 'Full HD',
  [CameraVideoResolutionValue['4K']]: '4K',
  [CameraVideoResolutionValue['5K']]: '5K',
};

export const makeCameraVideoResolutions = (): CameraResolution[] =>
  makeOptions(CameraVideoResolutionValue, CameraVideoResolutionValue.Any, labelMap);
