import { ReactNode } from 'react';

export type RadioBtnProps = {
  id?: string;
  name?: string;
  value?: string;
  checkedValue?: string;
  onRadioChange?: (value: string) => void;
  children?: ReactNode;
};

export type RadioBtn = {
  key: number;
  id: string;
  value: string;
  name: string;
  label: string;
  checkedValue: string;
};
