import { RadioGroupProps } from 'src/components/shared/radio-group/types';

function RadioGroup({ children }: RadioGroupProps) {
  return <ul className="filter__radiobuttons-list">{children}</ul>;
}

export default RadioGroup;
