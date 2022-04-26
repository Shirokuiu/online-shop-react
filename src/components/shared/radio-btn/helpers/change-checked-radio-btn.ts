import { EstateRoom } from 'src/store/types/main-page-process';
import { RadioBtn } from 'src/components/shared/radio-btn/types';

export const changeCheckedRadioBtn = (btns: RadioBtn[], checkedValue: string): EstateRoom[] =>
  btns.map((btn) => ({
    ...btn,
    checkedValue,
  }));
