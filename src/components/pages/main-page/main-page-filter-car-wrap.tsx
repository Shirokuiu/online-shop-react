import MainPageFilterCarYear from 'src/components/pages/main-page/main-page-filter-car-year';

function MainPageFilterCarWrap() {
  return (
    <div className="filter__car">
      <div className="filter__select-wrapper">
        <label htmlFor="resolution-video">Минимальный год выпуска</label>
        <MainPageFilterCarYear />
      </div>
    </div>
  );
}

export default MainPageFilterCarWrap;
