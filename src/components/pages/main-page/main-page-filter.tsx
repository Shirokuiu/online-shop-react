import MainPageFilterCategories from 'src/components/pages/main-page/main-page-filter-categories';
import MainPageFilterEstateWrap from 'src/components/pages/main-page/main-page-filter-estate-wrap';
import MainPageFilterCameraWrap from 'src/components/pages/main-page/main-page-filter-camera-wrap';

function MainPageFilter() {
  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <MainPageFilterCategories />
        <MainPageFilterEstateWrap />
        <MainPageFilterCameraWrap />
        <button className="button filter__button" type="submit">
          Показать
        </button>
      </form>
    </section>
  );
}

export default MainPageFilter;
