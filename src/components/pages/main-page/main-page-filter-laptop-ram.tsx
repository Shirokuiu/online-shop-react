import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLaptopRams } from 'src/store/main-page-process/selectors';
import RadioBtn from 'src/components/shared/radio-btn/radio-btn';
import RadioGroup from 'src/components/shared/radio-group/radio-group';
import { changeLaptopRam } from 'src/store/main-page-process/reducer/main-page-process';
import { LaptopRamValue } from 'src/store/types/main-page-process';

function MainPageFilterLaptopRam() {
  const rams = useAppSelector(getLaptopRams);
  const dispatch = useAppDispatch();

  const handleRadioChange = (value: string) => {
    dispatch(changeLaptopRam(value as LaptopRamValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Минимальный объем оперативной памяти</legend>
      <RadioGroup>
        {rams.map(({ id, label, value, name, checkedValue, key }) => (
          <RadioBtn
            key={key}
            id={id}
            value={value}
            name={name}
            checkedValue={checkedValue}
            onRadioChange={handleRadioChange}
          >
            {label}
          </RadioBtn>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

export default MainPageFilterLaptopRam;
