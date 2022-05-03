import Select from 'src/components/shared/select/select';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getCaryears } from 'src/store/main-page-process/selectors';
import { changeCarYear } from 'src/store/main-page-process/reducer/main-page-process';

function MainPageFilterCarYear() {
  const years = useAppSelector(getCaryears);
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    dispatch(changeCarYear(value));
  };

  return <Select id="car_year" name="car_year" options={years} onChange={handleSelectChange} />;
}

export default MainPageFilterCarYear;