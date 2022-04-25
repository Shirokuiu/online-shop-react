import RadioGroup from 'src/components/shared/radio-group/radio-group';
import RadioBtn from 'src/components/shared/radio-btn/radio-btn';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getEstateRooms } from 'src/store/main-page-process/selectors';
import { changeEstateRoom } from 'src/store/main-page-process/reducer/main-page-process';
import { EstateRoomValue } from 'src/store/types/main-page-process';

function MainPageFilterEstateRooms() {
  const radioRooms = useAppSelector(getEstateRooms);
  const dispatch = useAppDispatch();

  const handleRadioChange = (value: string) => {
    dispatch(changeEstateRoom(value as EstateRoomValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Количество комнат</legend>
      <RadioGroup>
        {radioRooms.map(({ id, label, value, name, checkedValue, key }) => (
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

export default MainPageFilterEstateRooms;
