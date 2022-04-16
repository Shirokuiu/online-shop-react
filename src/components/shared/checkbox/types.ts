export type CheckboxProps = {
  children?: JSX.Element | string;
  name?: string;
  value?: string;
  id?: string;
  isChecked?: boolean;
  onChange?: (evt: CheckboxChangeEvent) => void;
};

export type CheckboxChangeEvent = {
  isChecked: boolean;
  value: string;
};
