import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeCity, toggleSortList, changeSortType, changeOfferActive} from "../../store/action";
import {fetchFavoriteOfferList, favorite} from "../../store/api-actions";
import CitiesPlacesList from "../cities-places-list/cities-places-list";
import Map from "../map/map";
import {upperFirst, sortPriceLowToHigh, sortPriceHighToLow, sortRated} from "../../utils";
import CitiesList from "../cities-list/cities-list";
import SortList from "../sort-list/sort-list";
import EmptyOffers from "../empty-offers/empty-offers";
import {SortType, SortTypeName, AuthorizationStatus, AppRoute, FavoriteAction} from "../../const";

import {getOffersCurrentCity} from "../../store/reducers/offers-data/selectors";
import {getCity, getOfferActive} from "../../store/reducers/offers-process/selectors";
import {getIsOpenSortList, getSortType} from "../../store/reducers/offers-sorting/selectors";
import {getAuthorizationStatus, getUser} from "../../store/reducers/user/selectors";

import mainScreenProp from "./main-screen.prop";
import placeCardProp from "../place-card/place-card.prop";

const MainScreen = (props) => {
  const {
    city,
    isOpenSortList,
    sortType,
    changeCityAction,
    toggleSortListAction,
    changeSortTypeAction,
    offerActive,
    changeOfferActiveAction,
    authorizationStatus,
    user,
    onClickFavorite,
    redirectLoginClick,
    onClickAddFavorite
  } = props;
  const cityParam = upperFirst(props.match.params.city);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  let {offers} = props;

  if (cityParam && cityParam !== city.name) {
    changeCityAction(cityParam);
  }

  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      offers = offers.slice().sort(sortPriceLowToHigh);
      break;
    case SortType.PRICE_HIGH_TO_LOW:
      offers = offers.slice().sort(sortPriceHighToLow);
      break;
    case SortType.TOP_RATED:
      offers = offers.slice().sort(sortRated);
      break;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {(isAuth && <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile" onClick={() => {
                    onClickFavorite();
                  }}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user[`avatar_url`]})`, borderRadius: `50%`}}>
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link>) || <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${offers.length === 0 && `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={city} changeCity={changeCityAction}/>
          </section>
        </div>
        <div className="cities">
          {(offers.length > 0 && <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {upperFirst(city.name)}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0" onClick={toggleSortListAction}>
                  {SortTypeName[sortType]}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortList isOpenSortList={isOpenSortList} sortType={sortType} toggleSortList={toggleSortListAction} changeSortType={changeSortTypeAction} />
              </form>
              <CitiesPlacesList
                offers={offers}
                changeOfferActive={changeOfferActiveAction}
                isAuth={isAuth}
                redirectLoginClick={redirectLoginClick}
                favoriteAction={FavoriteAction.OFFERS}
                onClickAddFavorite={onClickAddFavorite}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} currentCity={city} offerActive={offerActive}/>
              </section>
            </div>
          </div>)
          || <EmptyOffers city={city}/>}
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
  changeCityAction: PropTypes.func.isRequired,
  isOpenSortList: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
  toggleSortListAction: PropTypes.func.isRequired,
  changeSortTypeAction: PropTypes.func.isRequired,
  offerActive: PropTypes.oneOfType([PropTypes.shape(), placeCardProp]).isRequired,
  changeOfferActiveAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    [`avatar_url`]: PropTypes.string,
    [`is_pro`]: PropTypes.bool
  }).isRequired,
  onClickFavorite: PropTypes.func.isRequired,
  redirectLoginClick: PropTypes.func.isRequired,
  onClickAddFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffersCurrentCity(state),
  isOpenSortList: getIsOpenSortList(state),
  sortType: getSortType(state),
  offerActive: getOfferActive(state),
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(city) {
    dispatch(changeCity(city));
  },
  toggleSortListAction() {
    dispatch(toggleSortList());
  },
  changeSortTypeAction(sortType) {
    dispatch(changeSortType(sortType));
  },
  changeOfferActiveAction(activeOffer) {
    dispatch(changeOfferActive(activeOffer));
  },
  onClickFavorite() {
    dispatch(fetchFavoriteOfferList());
  },
  onClickAddFavorite(id, isFavorite, favoriteAction) {
    dispatch(favorite(id, isFavorite, favoriteAction));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
