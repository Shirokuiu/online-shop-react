import ReactSlider from 'react-slider';

import 'src/components/shared/slider/slider.scss';

function Slider() {
  return (
    <ReactSlider
      className="slider"
      thumbClassName="slider__thumb"
      trackClassName="slider__track"
      defaultValue={[0, 100]}
      ariaLabel={['Lower thumb', 'Upper thumb']}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow} </div>}
      pearling
      minDistance={10}
    />
  );
}

export default Slider;
