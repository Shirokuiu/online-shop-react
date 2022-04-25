import { ReactNode } from 'react';

export type RadioBtnProps = {
  id?: string;
  name?: string;
  value?: string;
  checkedValue?: string;
  onRadioChange?: (value: string) => void;
  children?: ReactNode;
};
