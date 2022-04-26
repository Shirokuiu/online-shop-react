export type SelectProps = {
  id?: string;
  name?: string;
  options?: Option[];
  onChange?: (value: string) => void;
};

export type Option = {
  key: number;
  value: string;
  label: string;
  isSelected: boolean;
};
