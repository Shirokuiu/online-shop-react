import { LaptopProcessor, LaptopProcessorValue } from 'src/store/types/main-page-process';
import { makeCheckboxes } from 'src/components/shared/checkbox/helpers/make-checkboxes';

const labelMap = {
  [LaptopProcessorValue.i3]: 'Intel Core i3',
  [LaptopProcessorValue.i5]: 'Intel Core i5',
  [LaptopProcessorValue.i7]: 'Intel Core i7',
};

export const makeLaptopProcessors = (): LaptopProcessor[] =>
  makeCheckboxes(LaptopProcessorValue, 'laptop-processor', labelMap);
