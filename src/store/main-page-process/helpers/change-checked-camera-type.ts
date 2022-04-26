import { CameraType, CameraValue } from 'src/store/types/main-page-process';

export const changeCheckedValueCameraTypes = (
  cameraTypes: CameraType[],
  values: CameraValue[],
): CameraType[] =>
  cameraTypes.map((cameraType) => ({
    ...cameraType,
    isChecked: values.includes(cameraType.value),
  }));
