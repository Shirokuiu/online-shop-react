import { RadioBtn } from 'src/components/shared/radio-btn/types';

export const changeCheckedRadioBtn = (btns: RadioBtn[], checkedValue: string): RadioBtn[] =>
  btns.map((btn) => ({
    ...btn,
    checkedValue,
  }));
