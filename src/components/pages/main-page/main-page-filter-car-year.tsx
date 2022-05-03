import Select from 'src/components/shared/select/select';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCarYears } from 'src/store/main-page-process/selectors';
import { changeCarYear } from 'src/store/main-page-process/reducer/main-page-process';

function MainPageFilterCarYear() {
  const years = useAppSelector(getCarYears);
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    dispatch(changeCarYear(value));
  };

  return (
    <div className="filter__select-wrapper">
      <label htmlFor="resolution-video">Минимальный год выпуска</label>
      <Select id="car_year" name="car_year" options={years} onChange={handleSelectChange} />
    </div>
  );
}

export default MainPageFilterCarYear;
