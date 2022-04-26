import Checkbox from 'src/components/shared/checkbox/checkbox';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getEstateTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeEstateType } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';
import { EstateTypeValue } from 'src/store/types/main-page-process';

function MainPageFilterEstateType() {
  const estateTypes = useAppSelector(getEstateTypes);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeEstateType(getCheckboxCheckedValues<EstateTypeValue>(evt)));
  };

  return (
    <fieldset className="filter__type filter__type--estate">
      <legend>Тип недвижимости</legend>
      <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
        {estateTypes.map(({ key, value, label, id, name, isChecked }) => (
          <li key={key} className="filter__checkboxes-item">
            <Checkbox
              id={id}
              name={name}
              value={value}
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            >
              {label}
            </Checkbox>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default MainPageFilterEstateType;
