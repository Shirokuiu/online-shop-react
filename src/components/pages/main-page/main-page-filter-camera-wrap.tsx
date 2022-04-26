import MainPageFilterCameraType from 'src/components/pages/main-page/main-page-filter-camera-type';
import MainPageFilterCameraResolution from 'src/components/pages/main-page/main-page-filter-camera-resolution';
import MainPageFilterCameraVideoResolution from 'src/components/pages/main-page/main-page-filter-camera-video-resolution';

function MainPageFilterCameraWrap() {
  return (
    <div className="filter__camera">
      <MainPageFilterCameraType />
      <MainPageFilterCameraResolution />
      <MainPageFilterCameraVideoResolution />
    </div>
  );
}

export default MainPageFilterCameraWrap;
