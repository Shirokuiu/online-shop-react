import { ChangeEvent, useEffect, useState } from 'react';

import { InputNumberProps } from 'src/components/shared/input-number/types';

function InputNumber({
  id = 'input-number',
  name = 'input-number',
  min = 1,
  value = min,
  placeholder = '0',
  onChange = () => undefined,
}: InputNumberProps) {
  const [inputValue, setInputValue] = useState<number>(min);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const calculatedValue = +evt.target.value < min ? min : +evt.target.value;

    setInputValue(calculatedValue);
    onChange(calculatedValue);
  };

  return (
    <input
      type="number"
      id={id}
      name={name}
      min={min}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
}

export default InputNumber;
