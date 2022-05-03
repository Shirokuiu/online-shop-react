import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getEstateRooms } from 'src/store/main-page-process/selectors';
import { changeEstateRoom } from 'src/store/main-page-process/reducer/main-page-process';
import { EstateRoomValue } from 'src/store/types/main-page-process';
import MainPageFilterRadioList from 'src/components/pages/main-page/main-page-filter-radio-list';

function MainPageFilterEstateRooms() {
  const radioRooms = useAppSelector(getEstateRooms);
  const dispatch = useAppDispatch();

  const handleRadioChange = (value: string) => {
    dispatch(changeEstateRoom(value as EstateRoomValue));
  };

  return (
    <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Количество комнат</legend>
      <MainPageFilterRadioList items={radioRooms} onRadioChange={handleRadioChange} />
    </fieldset>
  );
}

export default MainPageFilterEstateRooms;
