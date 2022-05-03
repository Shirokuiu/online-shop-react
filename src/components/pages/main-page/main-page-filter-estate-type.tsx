import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getEstateTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeEstateType } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';
import { EstateTypeValue } from 'src/store/types/main-page-process';
import MainPageCheckboxList from 'src/components/pages/main-page/main-page-checkbox-list';
import { MainPageCheckboxListType } from 'src/components/pages/main-page/types/main-page-checkbox-list';

function MainPageFilterEstateType() {
  const estateTypes = useAppSelector(getEstateTypes);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeEstateType(getCheckboxCheckedValues<EstateTypeValue>(evt)));
  };

  return (
    <fieldset className="filter__type filter__type--estate">
      <legend>Тип недвижимости</legend>
      <MainPageCheckboxList
        items={estateTypes}
        type={MainPageCheckboxListType.Estate}
        onChange={handleCheckboxChange}
      />
    </fieldset>
  );
}

export default MainPageFilterEstateType;
