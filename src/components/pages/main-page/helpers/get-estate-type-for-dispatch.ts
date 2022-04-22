import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { EstateTypeValue } from 'src/store/types/main-page-process';

const result = new Set<string>();

export const getEstateTypeForDispatch = (
  checkboxChangeEvent: CheckboxChangeEvent,
): EstateTypeValue[] => {
  if (checkboxChangeEvent.isChecked) {
    result.add(checkboxChangeEvent.value);
  }

  if (!checkboxChangeEvent.isChecked) {
    result.delete(checkboxChangeEvent.value);
  }

  return [...(result as unknown as [])];
};
