import { useState } from 'react';

import Slider from 'src/components/shared/slider/slider';
import 'src/components/shared/slider-price/slider-price.scss';
import { Props } from 'src/components/shared/slider-price/types';
import { DEFAULT_FROM, DEFAULT_TO } from 'src/components/shared/slider-price/constants';

function SliderPrice({
  from = DEFAULT_FROM,
  to = DEFAULT_TO,
  onAfterChange = () => undefined,
}: Props) {
  const [priceFrom, setPriceFrom] = useState<number>(from);
  const [priceTo, setPriceTo] = useState<number>(to);

  const handleChange = (values: number[]) => {
    setPriceFrom(values[0]);
    setPriceTo(values[1]);
  };

  const handleAfterChange = (values: number[]) => {
    onAfterChange({ from: values[0], to: values[1] });
  };

  return (
    <div className="slider-price">
      <div className="slider-price__tooltip-wrap">
        <span className="slider-price__tooltip">от {priceFrom}</span>
        <span className="slider-price__tooltip">до {priceTo}</span>
      </div>
      <Slider onChange={handleChange} onAfterChange={handleAfterChange} />
    </div>
  );
}

export default SliderPrice;
