import MainPageCheckboxList from 'src/components/pages/main-page/main-page-checkbox-list';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCarBodyItems } from 'src/store/main-page-process/selectors';
import { MainPageCheckboxListType } from 'src/components/pages/main-page/types/main-page-checkbox-list';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeCarBodyItem } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';

function MainPageFilterCarBody() {
  const bodyItems = useAppSelector(getCarBodyItems);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeCarBodyItem(getCheckboxCheckedValues(evt)));
  };

  return (
    <fieldset className="filter__type filter__type--car-body">
      <legend>Тип кузова</legend>
      <MainPageCheckboxList
        items={bodyItems}
        type={MainPageCheckboxListType.CarBody}
        onChange={handleCheckboxChange}
      />
    </fieldset>
  );
}

export default MainPageFilterCarBody;
