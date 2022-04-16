import MainPageFilterEstateType from 'src/components/pages/main-page/main-page-filter-estate-type';

function MainPageFilterEstateWrap() {
  return (
    <div className="filter__estate">
      <MainPageFilterEstateType />
      {/*<div className="filter__min-square">*/}
      {/*  <label htmlFor="square">*/}
      {/*    Минимальная площать, м<sup>2</sup>*/}
      {/*  </label>*/}
      {/*  <input type="number" id="square" name="min-square" min="1" value="" placeholder="0" />*/}
      {/*</div>*/}
      {/*<fieldset className="filter__radiobuttons filter__radiobuttons--ram">*/}
      {/*  <legend>Количество комнат</legend>*/}
      {/*  <ul className="filter__ram-list">*/}
      {/*    <li className="filter__radiobuttons-item">*/}
      {/*      <input*/}
      {/*        className="visually-hidden"*/}
      {/*        type="radio"*/}
      {/*        name="rooms"*/}
      {/*        value="any"*/}
      {/*        id="any_room"*/}
      {/*      />*/}
      {/*      <label htmlFor="any_room">Любое</label>*/}
      {/*    </li>*/}
      {/*    <li className="filter__radiobuttons-item">*/}
      {/*      <input className="visually-hidden" type="radio" name="rooms" value="one" id="one" />*/}
      {/*      <label htmlFor="one">1</label>*/}
      {/*    </li>*/}
      {/*    <li className="filter__radiobuttons-item">*/}
      {/*      <input className="visually-hidden" type="radio" name="rooms" value="two" id="two" />*/}
      {/*      <label htmlFor="two">2</label>*/}
      {/*    </li>*/}
      {/*    <li className="filter__radiobuttons-item">*/}
      {/*      <input className="visually-hidden" type="radio" name="rooms" value="three" id="three" />*/}
      {/*      <label htmlFor="three">3</label>*/}
      {/*    </li>*/}
      {/*    <li className="filter__radiobuttons-item">*/}
      {/*      <input className="visually-hidden" type="radio" name="rooms" value="four" id="four" />*/}
      {/*      <label htmlFor="four">4</label>*/}
      {/*    </li>*/}
      {/*    <li className="filter__radiobuttons-item">*/}
      {/*      <input*/}
      {/*        className="visually-hidden"*/}
      {/*        type="radio"*/}
      {/*        name="rooms"*/}
      {/*        value="fivemore"*/}
      {/*        id="fivemore"*/}
      {/*      />*/}
      {/*      <label htmlFor="fivemore">5+</label>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</fieldset>*/}
    </div>
  );
}

export default MainPageFilterEstateWrap;
