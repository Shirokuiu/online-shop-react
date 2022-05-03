import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopRams } from 'src/store/main-page-process/selectors';
import { changeLaptopRam } from 'src/store/main-page-process/reducer/main-page-process';
import { LaptopRamValue } from 'src/store/types/main-page-process';
import MainPageFilterRadioList from 'src/components/pages/main-page/main-page-filter-radio-list';

function MainPageFilterLaptopRam() {
  const rams = useAppSelector(getLaptopRams);
  const dispatch = useAppDispatch();

  const handleRadioChange = (value: string) => {
    dispatch(changeLaptopRam(value as LaptopRamValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Минимальный объем оперативной памяти</legend>
      <MainPageFilterRadioList items={rams} onRadioChange={handleRadioChange} />
    </fieldset>
  );
}

export default MainPageFilterLaptopRam;
