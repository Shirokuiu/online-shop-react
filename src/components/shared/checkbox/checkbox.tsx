import { ChangeEvent, useEffect, useState } from 'react';

import { CheckboxProps } from 'src/components/shared/checkbox/types';

function Checkbox({
  children,
  name = 'checkbox',
  value = 'checkbox',
  id = 'checkbox',
  isChecked = false,
  onChange = () => undefined,
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange({ value: evt.target.value, isChecked: evt.target.checked });
  };

  return (
    <>
      <input
        className="visually-hidden"
        type="checkbox"
        name={name}
        value={value}
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
}

export default Checkbox;
