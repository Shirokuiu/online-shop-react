import RadioBtn from 'src/components/shared/radio-btn/radio-btn';
import RadioGroup from 'src/components/shared/radio-group/radio-group';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopDiagonals } from 'src/store/main-page-process/selectors';
import { changeLaptopDiagonal } from 'src/store/main-page-process/reducer/main-page-process';
import { LaptopDiagonalValue } from 'src/store/types/main-page-process';

function MainPageFilterLaptopDiagonal() {
  const diagonals = useAppSelector(getLaptopDiagonals);
  const dispatch = useAppDispatch();

  const handleDiagonalChange = (value: string) => {
    dispatch(changeLaptopDiagonal(value as LaptopDiagonalValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--diagonal">
      <legend>Минимальная диагональ экрана</legend>
      <RadioGroup>
        {diagonals.map(({ id, label, value, name, checkedValue, key }) => (
          <RadioBtn
            key={key}
            id={id}
            value={value}
            name={name}
            checkedValue={checkedValue}
            onRadioChange={handleDiagonalChange}
          >
            {label}
            <sup>″</sup>
          </RadioBtn>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

export default MainPageFilterLaptopDiagonal;
