import MainPageFilterRadioList from 'src/components/pages/main-page/main-page-filter-radio-list';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCarTransmissions } from 'src/store/main-page-process/selectors';
import { changeCarTransmission } from 'src/store/main-page-process/reducer/main-page-process';
import { CarTransmissionValue } from 'src/store/types/main-page-process';

function MainPageFilterCarTransmission() {
  const transmissoins = useAppSelector(getCarTransmissions);
  const dispatch = useAppDispatch();

  const handleRadioChange = (value: string) => {
    dispatch(changeCarTransmission(value as CarTransmissionValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--transmission">
      <legend>Коробка передач</legend>
      <MainPageFilterRadioList items={transmissoins} onRadioChange={handleRadioChange} />
    </fieldset>
  );
}

export default MainPageFilterCarTransmission;
