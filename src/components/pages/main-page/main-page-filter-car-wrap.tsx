import MainPageFilterCarYear from 'src/components/pages/main-page/main-page-filter-car-year';
import MainPageFilterCarTransmission from 'src/components/pages/main-page/main-page-filter-car-transmission';
import MainPageFilterCarBody from 'src/components/pages/main-page/main-page-filter-car-body';

function MainPageFilterCarWrap() {
  return (
    <div className="filter__car">
      <MainPageFilterCarYear />
      <MainPageFilterCarTransmission />
      <MainPageFilterCarBody />
    </div>
  );
}

export default MainPageFilterCarWrap;
