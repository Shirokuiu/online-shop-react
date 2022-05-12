import { CategoryType } from 'src/store/types/main-page-process';
import MainPageFilterEstateWrap from 'src/components/pages/main-page/main-page-filter-estate-wrap';
import MainPageFilterCameraWrap from 'src/components/pages/main-page/main-page-filter-camera-wrap';
import MainPageFilterLaptopWrap from 'src/components/pages/main-page/main-page-filter-laptop-wrap';
import MainPageFilterCarWrap from 'src/components/pages/main-page/main-page-filter-car-wrap';

const getAllFilters = () => (
  <>
    <MainPageFilterEstateWrap />
    <MainPageFilterCameraWrap />
    <MainPageFilterLaptopWrap />
    <MainPageFilterCarWrap />
  </>
);

const filterMap = {
  [CategoryType.All]: getAllFilters(),
  [CategoryType.Estate]: <MainPageFilterEstateWrap />,
  [CategoryType.Laptops]: <MainPageFilterLaptopWrap />,
  [CategoryType.Camera]: <MainPageFilterCameraWrap />,
  [CategoryType.Cars]: <MainPageFilterCarWrap />,
};

export const mainPageFilterSwitchFilters = (categoryType: CategoryType): JSX.Element => {
  return filterMap[categoryType] ?? <div />;
};
