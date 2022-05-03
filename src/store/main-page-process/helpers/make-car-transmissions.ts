import { CarTransmission, CarTransmissionValue } from 'src/store/types/main-page-process';
import { makeRadioBtns } from 'src/components/shared/radio-btn/helpers/make-radio-btns';

const labelMap = {
  [CarTransmissionValue.Any]: 'Любая',
  [CarTransmissionValue.Mechanic]: 'Механика',
  [CarTransmissionValue.Auto]: 'Автомат',
};

export const makeCarTransmissions = (): CarTransmission[] =>
  makeRadioBtns(CarTransmissionValue, 'rooms', CarTransmissionValue.Any, labelMap);
