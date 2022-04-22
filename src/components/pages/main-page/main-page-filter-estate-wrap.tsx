import MainPageFilterEstateType from 'src/components/pages/main-page/main-page-filter-estate-type';
import MainPageFilterEstateSquare from 'src/components/pages/main-page/main-page-filter-estate-square';
import MainPageFilterEstateRooms from 'src/components/pages/main-page/main-page-filter-estate-rooms';

function MainPageFilterEstateWrap() {
  return (
    <div className="filter__estate">
      <MainPageFilterEstateType />
      <MainPageFilterEstateSquare />
      <MainPageFilterEstateRooms />
    </div>
  );
}

export default MainPageFilterEstateWrap;
