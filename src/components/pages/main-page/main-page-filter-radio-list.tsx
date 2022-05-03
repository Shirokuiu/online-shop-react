import RadioBtn from 'src/components/shared/radio-btn/radio-btn';
import RadioGroup from 'src/components/shared/radio-group/radio-group';
import { Props } from 'src/components/pages/main-page/types/main-page-filter-radio-list';

function MainPageFilterRadioList({ items, onRadioChange }: Props) {
  return (
    <RadioGroup>
      {items.map(({ id, label, value, name, checkedValue, key }) => (
        <RadioBtn
          key={key}
          id={id}
          value={value}
          name={name}
          checkedValue={checkedValue}
          onRadioChange={onRadioChange}
        >
          {label}
        </RadioBtn>
      ))}
    </RadioGroup>
  );
}

export default MainPageFilterRadioList;
