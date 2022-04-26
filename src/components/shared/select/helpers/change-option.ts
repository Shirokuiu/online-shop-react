import { Option } from 'src/components/shared/select/types';

export const changeOption = (categories: Option[], selectedOptionValue: string): Option[] =>
  categories.map((option) => ({
    ...option,
    isSelected: option.value === selectedOptionValue,
  }));
