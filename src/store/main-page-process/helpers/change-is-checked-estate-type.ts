import { EstateType, EstateTypeValue } from 'src/store/types/main-page-process';

export const changeIsCheckedEstateType = (
  estateTypes: EstateType[],
  estateValues: Array<EstateTypeValue>,
) =>
  estateTypes.map((estateType: EstateType) => ({
    ...estateType,
    isChecked: estateValues.includes(estateType.value),
  }));
