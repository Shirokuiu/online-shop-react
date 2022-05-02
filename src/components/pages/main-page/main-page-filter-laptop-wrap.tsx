import MainPageFilterLaptopType from 'src/components/pages/main-page/main-page-filter-laptop-type';
import MainPageFilterLaptopRam from 'src/components/pages/main-page/main-page-filter-laptop-ram';

function MainPageFilterLaptopWrap() {
  return (
    <div className="filter__laptop">
      <MainPageFilterLaptopType />
      <MainPageFilterLaptopRam />
    </div>
  );
}

export default MainPageFilterLaptopWrap;
