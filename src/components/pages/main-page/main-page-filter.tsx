import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import MainPageFilterCategories from 'src/components/pages/main-page/main-page-filter-categories';
import { setDefaultSearchParams } from 'src/components/pages/main-page/helpers/set-default-search-params';
import { useAppSelector } from 'src/hooks';
import { getActiveCategoryValue } from 'src/store/main-page-process/selectors';
import { hasSearchParams } from 'src/components/pages/main-page/helpers/has-search-params';

function MainPageFilter() {
  const categoryValue = useAppSelector(getActiveCategoryValue);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!hasSearchParams(searchParams)) {
      setSearchParams({ ...setDefaultSearchParams() });

      return;
    }

    setSearchParams({ category: searchParams.get('category') as string });
  }, [searchParams]);

  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <MainPageFilterCategories />
        <button className="button filter__button" type="submit">
          Показать
        </button>
      </form>
    </section>
  );
}

export default MainPageFilter;
