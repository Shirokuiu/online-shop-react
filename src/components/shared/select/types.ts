export type SelectProps = {
  id?: string;
  name?: string;
  options?: Option[];
  onChange?: (value: string) => void;
};

export type Option = {
  id: number;
  value: string;
  text: string;
  isSelected: boolean;
};
