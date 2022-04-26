export type CheckboxProps = {
  children?: JSX.Element | string;
  name?: string;
  value?: string;
  id?: string;
  isChecked?: boolean;
  onChange?: (evt: CheckboxChangeEvent) => void;
};

export type Checkbox = {
  key: number;
  name: string;
  value: string;
  id: string;
  label: string;
  isChecked?: boolean;
};

export type CheckboxChangeEvent = {
  isChecked: boolean;
  value: string;
};
