import { Checkbox, CheckboxChangeEvent } from 'src/components/shared/checkbox/types';

export type Props = {
  items: Checkbox[];
  type: MainPageCheckboxListType;
  onChange?: (evt: CheckboxChangeEvent) => void;
};

export enum MainPageCheckboxListType {
  Estate = 'estate',
  Camera = 'camera',
  LaptopRam = 'laptop-ram',
  LaptopProcessor = 'laptop-processor',
}
