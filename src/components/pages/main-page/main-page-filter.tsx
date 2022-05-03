import MainPageFilterCategories from 'src/components/pages/main-page/main-page-filter-categories';
import MainPageFilterEstateWrap from 'src/components/pages/main-page/main-page-filter-estate-wrap';
import MainPageFilterCameraWrap from 'src/components/pages/main-page/main-page-filter-camera-wrap';
import MainPageFilterLaptopWrap from 'src/components/pages/main-page/main-page-filter-laptop-wrap';
import MainPageFilterCarWrap from 'src/components/pages/main-page/main-page-filter-car-wrap';

function MainPageFilter() {
  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <MainPageFilterCategories />
        <MainPageFilterEstateWrap />
        <MainPageFilterCameraWrap />
        <MainPageFilterLaptopWrap />
        <MainPageFilterCarWrap />
        <button className="button filter__button" type="submit">
          Показать
        </button>
      </form>
    </section>
  );
}

export default MainPageFilter;
