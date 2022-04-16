import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import MainPageFilterCategories from 'src/components/pages/main-page/main-page-filter-categories';
import { setDefaultSearchParams } from 'src/components/pages/main-page/helpers/set-default-search-params';
import MainPageFilterEstateWrap from 'src/components/pages/main-page/main-page-filter-estate-wrap';
import {
  changeEstateType,
  changeFilterCategory,
} from 'src/store/main-page-process/reducer/main-page-process';
import { CategoryType, SearchParamsKey } from 'src/store/types/main-page-process';
import { useAppDispatch } from 'src/hooks';
import { makeParamsEstateTypeForDispatch } from 'src/components/pages/main-page/helpers/make-params-estate-type-for-dispatch';

function MainPageFilter() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get(SearchParamsKey.Category)) {
      setSearchParams({ ...setDefaultSearchParams() });
    }

    dispatch(changeFilterCategory(searchParams.get(SearchParamsKey.Category) as CategoryType));
  }, []);

  useEffect(() => {
    if (searchParams.get(SearchParamsKey.EstateType)) {
      dispatch(
        changeEstateType(
          makeParamsEstateTypeForDispatch(searchParams.get(SearchParamsKey.EstateType) as string),
        ),
      );
    }
  }, [searchParams.get(SearchParamsKey.EstateType)]);

  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <MainPageFilterCategories />
        <MainPageFilterEstateWrap />
        <button className="button filter__button" type="submit">
          Показать
        </button>
      </form>
    </section>
  );
}

export default MainPageFilter;
