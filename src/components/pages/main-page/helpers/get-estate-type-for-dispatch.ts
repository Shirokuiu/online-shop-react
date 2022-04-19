import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { EstateTypeValue } from 'src/store/types/main-page-process';

const result = new Set<string>();

export const getEstateTypeForDispatch = (
  checkboxChangeEvent: CheckboxChangeEvent,
): EstateTypeValue[] => {
  checkboxChangeEvent.isChecked
    ? result.add(checkboxChangeEvent.value)
    : result.delete(checkboxChangeEvent.value);

  return [...(result as unknown as [])];
};
