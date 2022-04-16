import { EstateTypeSearchParamsState } from 'src/components/pages/main-page/types/main-page-filter-estate-type';
import { EstateTypeValue } from 'src/store/types/main-page-process';

export const makeParamsEstateTypeForDispatch = (params: string): Array<EstateTypeValue> => {
  return params
    .split(', ')
    .filter((param) => param !== EstateTypeSearchParamsState.Empty) as Array<EstateTypeValue>;
};
