import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopTypes } from 'src/store/main-page-process/selectors';
import Checkbox from 'src/components/shared/checkbox/checkbox';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeLaptopType } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';
import { LaptopTypeValue } from 'src/store/types/main-page-process';

function MainPageFilterLaptopType() {
  const types = useAppSelector(getLaptopTypes);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeLaptopType(getCheckboxCheckedValues<LaptopTypeValue>(evt)));
  };

  return (
    <fieldset className="filter__type filter__type--laptop">
      <legend>Тип ноутбука</legend>
      <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-ram">
        {types.map(({ key, id, value, name, label, isChecked }) => (
          <li key={key} className="filter__checkboxes-item">
            <Checkbox
              id={id}
              value={value}
              name={name}
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

export default MainPageFilterLaptopType;
