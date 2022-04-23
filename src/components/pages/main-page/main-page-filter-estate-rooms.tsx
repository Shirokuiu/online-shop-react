import RadioGroup from 'src/components/shared/radio-group/radio-group';
import RadioBtn from 'src/components/shared/radio-btn/radio-btn';
import { useAppSelector } from 'src/hooks';
import { getEstateRooms } from 'src/store/main-page-process/selectors';

function MainPageFilterEstateRooms() {
  const radioRooms = useAppSelector(getEstateRooms);

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Количество комнат</legend>
      <RadioGroup>
        {radioRooms.map(({ id, label, value, name, key }) => (
          <RadioBtn key={key} id={id} value={value} name={name}>
            {label}
          </RadioBtn>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

export default MainPageFilterEstateRooms;
