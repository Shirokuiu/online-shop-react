import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { EstateTypeSearchParamsState } from 'src/components/pages/main-page/types/main-page-filter-estate-type';

const result = new Set<string>();

export const makeEstateTypeSearchParams = (
  checkboxChangeEvent: CheckboxChangeEvent,
): string | EstateTypeSearchParamsState.Empty => {
  checkboxChangeEvent.isChecked
    ? result.add(checkboxChangeEvent.value)
    : result.delete(checkboxChangeEvent.value);

  const calculatedRes = [...(result as unknown as [])];

  return calculatedRes.length ? calculatedRes.join(', ') : EstateTypeSearchParamsState.Empty;
};
