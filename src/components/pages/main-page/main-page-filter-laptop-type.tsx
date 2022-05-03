import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeLaptopType } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';
import { LaptopTypeValue } from 'src/store/types/main-page-process';
import MainPageCheckboxList from 'src/components/pages/main-page/main-page-checkbox-list';
import { MainPageCheckboxListType } from 'src/components/pages/main-page/types/main-page-checkbox-list';

function MainPageFilterLaptopType() {
  const types = useAppSelector(getLaptopTypes);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeLaptopType(getCheckboxCheckedValues<LaptopTypeValue>(evt)));
  };

  return (
    <fieldset className="filter__type filter__type--laptop">
      <legend>Тип ноутбука</legend>
      <MainPageCheckboxList
        items={types}
        type={MainPageCheckboxListType.LaptopRam}
        onChange={handleCheckboxChange}
      />
    </fieldset>
  );
}

export default MainPageFilterLaptopType;
