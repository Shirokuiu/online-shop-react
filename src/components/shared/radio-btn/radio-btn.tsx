import { RadioBtnProps } from 'src/components/shared/radio-btn/types';

function RadioBtn({
  children = 'Radio',
  id = 'radio',
  value = 'radioItem',
  name = 'radioGroup',
  checkedValue = '',
  onRadioChange = () => undefined,
}: RadioBtnProps) {
  // NOTE Для линтера, ругается, если не прокинуть событие onChange,
  const handleChange = () => {
    //
  };

  const handleLabelClick = () => {
    onRadioChange(value);
  };

  return (
    <li className="filter__radiobuttons-item">
      <input
        className="visually-hidden"
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        checked={checkedValue === value}
      />
      {/* NOTE onChange на инпуте не срабатывает */}
      <label htmlFor="any_room" onClick={handleLabelClick}>
        {children}
      </label>
    </li>
  );
}

export default RadioBtn;
