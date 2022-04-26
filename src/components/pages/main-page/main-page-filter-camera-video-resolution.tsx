import Select from 'src/components/shared/select/select';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCameraVideoResolutions } from 'src/store/main-page-process/selectors';
import { changeCameraVideoResolution } from 'src/store/main-page-process/reducer/main-page-process';
import { CameraVideoResolutionValue } from 'src/store/types/main-page-process';

function MainPageFilterCameraVideoResolution() {
  const videoResolutions = useAppSelector(getCameraVideoResolutions);
  const dispatch = useAppDispatch();

  const handleVideoResolutionChange = (value: string) => {
    dispatch(changeCameraVideoResolution(value as CameraVideoResolutionValue));
  };

  return (
    <div className="filter__select-wrapper">
      <label htmlFor="resolution-video">Минимальное разрешение видео</label>
      <Select
        id="resolution-video"
        name="resolution-video"
        options={videoResolutions}
        onChange={handleVideoResolutionChange}
      />
    </div>
  );
}

export default MainPageFilterCameraVideoResolution;
