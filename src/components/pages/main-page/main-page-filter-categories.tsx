import Select from 'src/components/shared/select/select';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getFilterCategories } from 'src/store/main-page-process/selectors';
import { CategoryType } from 'src/store/types/main-page-process';
import { changeFilterCategory } from 'src/store/main-page-process/reducer/main-page-process';

function MainPageFilterCategories() {
  const categories = useAppSelector(getFilterCategories);
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    dispatch(changeFilterCategory(value as CategoryType));
  };

  return (
    <div className="filter__select-wrapper">
      <label htmlFor="categories">Категория товаров</label>
      <Select
        id="categories"
        name="categories"
        options={categories}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default MainPageFilterCategories;
