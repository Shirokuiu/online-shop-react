import { ChangeEvent, useState } from 'react';

import { SelectProps } from 'src/components/shared/select/types';

function Select({
  id = 'select',
  name = 'select',
  options = [],
  onChange = () => undefined,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    options.find((option) => option.isSelected)?.value,
  );

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(evt.target.value);
    onChange(evt.target.value);
  };

  return (
    <div className="select">
      <select
        id={id}
        name={name}
        value={selectedValue}
        disabled={options.length === 0}
        onChange={handleSelectChange}
      >
        {options.map(({ key, value, label }) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </select>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        xmlns="http://www.w3.org/2000/svg"
        className="select__dropdown-icon"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
        />
      </svg>
    </div>
  );
}

export default Select;
