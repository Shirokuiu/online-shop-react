import MainPageFilterCarYear from 'src/components/pages/main-page/main-page-filter-car-year';
import MainPageFilterCarTransmission from 'src/components/pages/main-page/main-page-filter-car-transmission';
import MainPageFilterCarBody from 'src/components/pages/main-page/main-page-filter-car-body';

function MainPageFilterCarWrap() {
  return (
    <div className="filter__car">
      <div className="filter__select-wrapper">
        <label htmlFor="resolution-video">Минимальный год выпуска</label>
        <MainPageFilterCarYear />
        <MainPageFilterCarTransmission />
        <MainPageFilterCarBody />
      </div>
    </div>
  );
}

export default MainPageFilterCarWrap;
