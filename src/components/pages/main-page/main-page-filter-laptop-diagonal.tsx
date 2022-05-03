import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopDiagonals } from 'src/store/main-page-process/selectors';
import { changeLaptopDiagonal } from 'src/store/main-page-process/reducer/main-page-process';
import { LaptopDiagonalValue } from 'src/store/types/main-page-process';
import MainPageFilterRadioList from 'src/components/pages/main-page/main-page-filter-radio-list';

function MainPageFilterLaptopDiagonal() {
  const diagonals = useAppSelector(getLaptopDiagonals);
  const dispatch = useAppDispatch();

  const handleDiagonalChange = (value: string) => {
    dispatch(changeLaptopDiagonal(value as LaptopDiagonalValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--diagonal">
      <legend>Минимальная диагональ экрана</legend>
      <MainPageFilterRadioList items={diagonals} onRadioChange={handleDiagonalChange} />
    </fieldset>
  );
}

export default MainPageFilterLaptopDiagonal;
