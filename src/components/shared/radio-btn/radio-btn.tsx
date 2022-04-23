import { RadioBtnProps } from 'src/components/shared/radio-btn/types';

function RadioBtn({
  children = 'Radio',
  id = 'radio',
  value = 'radioItem',
  name = 'radioGroup',
}: RadioBtnProps) {
  return (
    <li className="filter__radiobuttons-item">
      <input className="visually-hidden" type="radio" name={name} value={value} id={id} />
      <label htmlFor="any_room">{children}</label>
    </li>
  );
}

export default RadioBtn;
