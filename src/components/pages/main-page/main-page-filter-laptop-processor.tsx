import MainPageCheckboxList from 'src/components/pages/main-page/main-page-checkbox-list';
import { MainPageCheckboxListType } from 'src/components/pages/main-page/types/main-page-checkbox-list';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopProcessors } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { changeLaptopProcessor } from 'src/store/main-page-process/reducer/main-page-process';
import { getCheckboxCheckedValues } from 'src/components/shared/checkbox/helpers/get-checkbox-checked-values';

function MainPageFilterLaptopProcessor() {
  const processors = useAppSelector(getLaptopProcessors);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    dispatch(changeLaptopProcessor(getCheckboxCheckedValues(evt)));
  };

  return (
    <fieldset className="filter__type filter__type--laptop-processor">
      <legend>Тип процессора</legend>
      <MainPageCheckboxList
        items={processors}
        type={MainPageCheckboxListType.LaptopProcessor}
        onChange={handleCheckboxChange}
      />
    </fieldset>
  );
}

export default MainPageFilterLaptopProcessor;
