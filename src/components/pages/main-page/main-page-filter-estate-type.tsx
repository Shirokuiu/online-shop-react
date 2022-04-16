import { useSearchParams } from 'react-router-dom';

import Checkbox from 'src/components/shared/checkbox/checkbox';
import { useAppSelector } from 'src/hooks';
import { getEstateTypes } from 'src/store/main-page-process/selectors';
import { CheckboxChangeEvent } from 'src/components/shared/checkbox/types';
import { mergeSearchParams } from 'src/components/pages/main-page/helpers/merge-search-params';
import { EstateTypeSearchParamsState } from 'src/components/pages/main-page/types/main-page-filter-estate-type';
import { makeEstateTypeSearchParams } from 'src/components/pages/main-page/helpers/make-estate-type-search-params';
import { SearchParamsKey } from 'src/store/types/main-page-process';

function MainPageFilterEstateType() {
  const estateTypes = useAppSelector(getEstateTypes);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (evt: CheckboxChangeEvent) => {
    const params = makeEstateTypeSearchParams(evt);

    if (params !== EstateTypeSearchParamsState.Empty) {
      setSearchParams(mergeSearchParams(searchParams, { estateType: params }));

      return;
    }

    searchParams.delete(SearchParamsKey.EstateType);
    setSearchParams(searchParams);
  };

  return (
    <fieldset className="filter__type filter__type--estate">
      <legend>Тип недвижимости</legend>
      <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
        {estateTypes.map(({ key, value, label, id, name, isChecked }) => (
          <li key={key} className="filter__checkboxes-item">
            <Checkbox
              id={id}
              name={name}
              value={value}
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            >
              {label}
            </Checkbox>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default MainPageFilterEstateType;
