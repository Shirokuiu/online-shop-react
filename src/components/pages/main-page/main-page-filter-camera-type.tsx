import Checkbox from 'src/components/shared/checkbox/checkbox';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCameraTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeCameraType } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';
import { CameraValue } from 'src/store/types/main-page-process';

function MainPageFilterCameraType() {
  const cameraTypes = useAppSelector(getCameraTypes);
  const dispatch = useAppDispatch();

  const handleCameraTypeChange = (changeEvt: CheckboxChangeEvent) => {
    dispatch(changeCameraType(getCheckboxCheckedValues<CameraValue>(changeEvt)));
  };

  return (
    <fieldset className="filter__type filter__type--camera">
      <legend>Тип фотоаппарата</legend>
      <ul className="filter__checkboxes-list filter__checkboxes-list--camera">
        {cameraTypes.map(({ key, id, name, value, label, isChecked }) => (
          <li key={key} className="filter__checkboxes-item">
            <Checkbox
              id={id}
              name={name}
              value={value}
              isChecked={isChecked}
              onChange={handleCameraTypeChange}
            >
              {label}
            </Checkbox>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default MainPageFilterCameraType;
