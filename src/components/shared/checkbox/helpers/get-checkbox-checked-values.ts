import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';

const result = new Set<string>();

export const getCheckboxCheckedValues = <T>(checkboxChangeEvent: CheckboxChangeEvent): T[] => {
  if (checkboxChangeEvent.isChecked) {
    result.add(checkboxChangeEvent.value);
  }

  if (!checkboxChangeEvent.isChecked) {
    result.delete(checkboxChangeEvent.value);
  }

  return [...(result as unknown as [])];
};
