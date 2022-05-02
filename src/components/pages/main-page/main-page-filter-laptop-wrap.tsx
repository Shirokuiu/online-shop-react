import MainPageFilterLaptopType from 'src/components/pages/main-page/main-page-filter-laptop-type';
import MainPageFilterLaptopRam from 'src/components/pages/main-page/main-page-filter-laptop-ram';
import MainPageFilterLaptopDiagonal from 'src/components/pages/main-page/main-page-filter-laptop-diagonal';

function MainPageFilterLaptopWrap() {
  return (
    <div className="filter__laptop">
      <MainPageFilterLaptopType />
      <MainPageFilterLaptopRam />
      <MainPageFilterLaptopDiagonal />
    </div>
  );
}

export default MainPageFilterLaptopWrap;
