import InputNumber from 'src/components/shared/input-number/input-number';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getEstateSquare } from 'src/store/main-page-process/selectors';
import { changeEstateSquare } from 'src/store/main-page-process/reducer/main-page-process';

function MainPageFilterEstateSquare() {
  const squareNum = useAppSelector(getEstateSquare);
  const dispatch = useAppDispatch();

  const handleSquareChange = (squareNumber: number) => {
    dispatch(changeEstateSquare(squareNumber));
  };

  return (
    <div className="filter__min-square">
      <label htmlFor="square">
        Минимальная площать, м<sup>2</sup>
      </label>
      <InputNumber value={squareNum} id="square" name="square" onChange={handleSquareChange} />
    </div>
  );
}

export default MainPageFilterEstateSquare;
