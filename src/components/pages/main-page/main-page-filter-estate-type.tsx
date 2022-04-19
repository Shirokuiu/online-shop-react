import Checkbox from 'src/components/shared/checkbox/checkbox';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getEstateTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { getEstateTypeForDispatch } from 'src/components/pages/main-page/helpers/get-estate-type-for-dispatch';
import { changeEstateType } from 'src/store/main-page-process/reducer/main-page-process';

function MainPageFilterEstateType() {
  const estateTypes = useAppSelector(getEstateTypes);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeEstateType(getEstateTypeForDispatch(evt)));
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
