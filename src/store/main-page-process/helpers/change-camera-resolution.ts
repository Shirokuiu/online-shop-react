import { CameraResolution, CameraResolutionValue } from 'src/store/types/main-page-process';

export const changeCameraResolutions = (
  categories: CameraResolution[],
  currentCategory: CameraResolutionValue,
): CameraResolution[] =>
  categories.map((cameraResolution) => ({
    ...cameraResolution,
    isSelected: cameraResolution.value === currentCategory,
  }));
