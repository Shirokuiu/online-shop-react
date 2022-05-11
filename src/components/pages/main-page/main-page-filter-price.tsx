import SliderPrice from 'src/components/shared/slider-price/slider-price';

function MainPageFilterPrice() {
  return (
    <div className="filter__range">
      <label htmlFor="range" className="filter__range-title">
        Цена, ₽
      </label>
      <SliderPrice />
    </div>
  );
}

export default MainPageFilterPrice;
