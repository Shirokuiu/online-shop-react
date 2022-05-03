import Checkbox from 'src/components/shared/checkbox/checkbox';
import { Props } from 'src/components/pages/main-page/types/main-page-checkbox-list';

function MainPageCheckboxList({ items, type, onChange = () => undefined }: Props) {
  return (
    <ul className={`filter__checkboxes-list filter__checkboxes-list--${type}`}>
      {items.map(({ key, value, label, id, name, isChecked }) => (
        <li key={key} className="filter__checkboxes-item">
          <Checkbox id={id} name={name} value={value} isChecked={isChecked} onChange={onChange}>
            {label}
          </Checkbox>
        </li>
      ))}
    </ul>
  );
}

export default MainPageCheckboxList;
