import MainPageFilterCategories from 'src/components/pages/main-page/main-page-filter-categories';
import MainPageFilterPrice from 'src/components/pages/main-page/main-page-filter-price';
import { useAppSelector } from 'src/hooks';
import { getActiveCategoryFilter } from 'src/store/main-page-process/selectors';
import { CategoryType } from 'src/store/types/main-page-process';
import { mainPageFilterSwitchFilters } from 'src/components/pages/main-page/helpers/main-page-filter-switch-filters';

function MainPageFilter() {
  const activeCategoryType: CategoryType = useAppSelector(getActiveCategoryFilter);

  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <MainPageFilterCategories />
        <MainPageFilterPrice />
        {mainPageFilterSwitchFilters(activeCategoryType)}
        <button className="button filter__button" type="submit">
          Показать
        </button>
      </form>
    </section>
  );
}

export default MainPageFilter;
