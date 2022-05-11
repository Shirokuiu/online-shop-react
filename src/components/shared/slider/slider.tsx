import { useState } from 'react';
import ReactSlider from 'react-slider';

import 'src/components/shared/slider/slider.scss';
import { Props } from 'src/components/shared/slider/types';
import { DEFAULT_VALUES } from 'src/components/shared/slider/constants';

function Slider({
  defaultValues = DEFAULT_VALUES,
  onChange = () => undefined,
  onAfterChange = () => undefined,
}: Props) {
  const [value, setValue] = useState<number[]>(defaultValues);

  const handleOnChange = (values: number[]) => {
    setValue(values);
    onChange(values);
  };

  const handleAfterChange = (values: number[]) => {
    onAfterChange(values);
  };

  return (
    <ReactSlider
      className="slider"
      thumbClassName="slider__thumb"
      trackClassName="slider__track"
      value={value}
      defaultValue={defaultValues}
      ariaLabel={['Lower thumb', 'Upper thumb']}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props) => <div {...props}> </div>}
      pearling
      minDistance={10}
      onChange={handleOnChange}
      onAfterChange={handleAfterChange}
    />
  );
}

export default Slider;
