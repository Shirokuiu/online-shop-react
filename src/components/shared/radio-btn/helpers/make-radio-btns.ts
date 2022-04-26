import { RadioBtn } from 'src/components/shared/radio-btn/types';

const getValues = (enumValue: Record<string, string>): string[] => Object.values(enumValue);

export const makeRadioBtns = (
  enumValue: Record<string, string>,
  name: string,
  defaultValue: string,
  labelMap: Record<string, string>,
): RadioBtn[] => {
  const values = getValues(enumValue);

  return values.map((value, idx) => ({
    value,
    name,
    key: idx + 1,
    id: value,
    label: labelMap[value],
    checkedValue: defaultValue,
  }));
};
