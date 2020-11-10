import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import CitiesPlacesList from "../cities-places-list/cities-places-list";
import Map from "../map/map";
import {upperFirst} from "../../utils";
import CitiesList from "../cities-list/cities-list";
import SortList from "../sort-list/sort-list";
import {SortTypeName} from "../../const";

import mainScreenProp from "./main-screen.prop";

const MainScreen = (props) => {
  const {
    offers,
    city,
    isOpenSortList,
    sortType,
    changeCity,
    getListOffers,
    toggleSortList,
    changeSortType
  } = props;
  const cityParam = upperFirst(props.match.params.city);

  if (cityParam && cityParam !== city.name) {
    changeCity(cityParam);
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={city} changeCity={changeCity} getListOffers={getListOffers}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {upperFirst(city.name)}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0" onClick={toggleSortList}>
                  {SortTypeName[sortType]}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortList isOpenSortList={isOpenSortList} sortType={sortType} toggleSortList={toggleSortList} changeSortType={changeSortType} />
              </form>
              <CitiesPlacesList offers={offers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} currentCity={city}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      city: PropTypes.string
    }).isRequired
  }).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  offers: mainScreenProp,
  changeCity: PropTypes.func.isRequired,
  getListOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers.filter((offer) => offer.city.name === state.city.name),
  isOpenSortList: state.isOpenSortList,
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getListOffers() {
    dispatch(ActionCreator.getListOffers());
  },
  toggleSortList() {
    dispatch(ActionCreator.toggleSortList());
  },
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
