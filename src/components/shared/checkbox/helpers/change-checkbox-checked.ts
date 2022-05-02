import { Checkbox } from 'src/components/shared/checkbox/types';

export const changeCheckboxChecked = (
  checboxes: Checkbox[],
  checkboxValues: string[],
): Checkbox[] =>
  checboxes.map((checkbox: Checkbox) => ({
    ...checkbox,
    isChecked: checkboxValues.includes(checkbox.value),
  }));
