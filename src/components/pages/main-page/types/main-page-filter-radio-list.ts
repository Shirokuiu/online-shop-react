import { RadioBtn } from 'src/components/shared/radio-btn/types';

export type Props = {
  items: RadioBtn[];
  onRadioChange?: (value: string) => void;
};
