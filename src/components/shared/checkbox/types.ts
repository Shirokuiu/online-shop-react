type BaseCheckbox = {
  name?: string;
  value?: string;
  id?: string;
  isChecked?: boolean;
};

export interface CheckboxProps extends BaseCheckbox {
  children?: JSX.Element | string;
  onChange?: (evt: CheckboxChangeEvent) => void;
}

export interface Checkbox extends BaseCheckbox {
  key: number;
  label: string;
}

export type CheckboxChangeEvent = {
  isChecked: boolean;
  value: string;
};
