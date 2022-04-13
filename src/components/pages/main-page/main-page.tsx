import MainPageFilter from 'src/components/pages/main-page/main-page-filter';

function MainPage() {
  return (
    <section className="onlineshop-app">
      <h1 className="visually-hidden">Главная</h1>
      <div className="onlineshop-app__blueline" />
      <div className="onlineshop-app__wrapper">
        <MainPageFilter />
      </div>
    </section>
  );
}

export default MainPage;
