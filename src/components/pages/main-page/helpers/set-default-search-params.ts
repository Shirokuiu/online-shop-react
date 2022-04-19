import { DefaultSearchParamsType } from 'src/components/pages/main-page/types/main-page-filter-categories';
import { CategoryType } from 'src/store/types/main-page-process';

export const setDefaultSearchParams = (): DefaultSearchParamsType => ({
  category: CategoryType.All,
});
