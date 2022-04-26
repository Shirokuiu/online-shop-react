import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCameraResolutions } from 'src/store/main-page-process/selectors';
import Select from 'src/components/shared/select/select';
import { changeCameraResolution } from 'src/store/main-page-process/reducer/main-page-process';
import { CameraResolutionValue } from 'src/store/types/main-page-process';

function MainPageFilterCameraResolution() {
  const resolutions = useAppSelector(getCameraResolutions);
  const dispatch = useAppDispatch();

  const handleResolutionChange = (resolution: string) => {
    dispatch(changeCameraResolution(resolution as CameraResolutionValue));
  };

  return (
    <div className="filter__select-wrapper filter__select-wrapper--min-resolution">
      <label htmlFor="resolution-matrix">Минимальное разрешение матрицы</label>
      <Select
        id="camera-resolution"
        name="camera-resolution"
        options={resolutions}
        onChange={handleResolutionChange}
      />
    </div>
  );
}

export default MainPageFilterCameraResolution;
