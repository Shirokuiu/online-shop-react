import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCameraTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeCameraType } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';
import { CameraValue } from 'src/store/types/main-page-process';
import MainPageCheckboxList from 'src/components/pages/main-page/main-page-checkbox-list';
import { MainPageCheckboxListType } from 'src/components/pages/main-page/types/main-page-checkbox-list';

function MainPageFilterCameraType() {
  const cameraTypes = useAppSelector(getCameraTypes);
  const dispatch = useAppDispatch();

  const handleCameraTypeChange = (changeEvt: CheckboxChangeEvent) => {
    dispatch(changeCameraType(getCheckboxCheckedValues<CameraValue>(changeEvt)));
  };

  return (
    <fieldset className="filter__type filter__type--camera">
      <legend>Тип фотоаппарата</legend>
      <MainPageCheckboxList
        items={cameraTypes}
        type={MainPageCheckboxListType.Camera}
        onChange={handleCameraTypeChange}
      />
    </fieldset>
  );
}

export default MainPageFilterCameraType;
