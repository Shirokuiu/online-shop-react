import Slider from 'src/components/shared/slider/slider';

function MainPageFilterPrice() {
  return (
    <div className="filter__range">
      <label htmlFor="range">Цена, ₽</label>
      <Slider />
    </div>
  );
}

export default MainPageFilterPrice;
