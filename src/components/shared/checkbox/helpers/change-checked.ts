import { EstateType } from 'src/store/types/main-page-process';
import { Checkbox } from 'src/components/shared/checkbox/types';

export const changeChecked = (checboxes: Checkbox[], checkboxValues: string[]) =>
  checboxes.map((estateType: EstateType) => ({
    ...estateType,
    isChecked: checkboxValues.includes(estateType.value),
  }));
