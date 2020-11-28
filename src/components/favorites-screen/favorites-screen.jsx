import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchFavoriteOfferList, favorite} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus, FavoriteAction} from "../../const";
import EmptyFavorites from "../empty-favorites/empty-favorites";

import {getFavoriteOffers} from "../../store/reducers/offers-data/selectors";
import {getAuthorizationStatus, getUser} from "../../store/reducers/user/selectors";

import mainScreenProp from "../main-screen/main-screen.prop";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavorites} = this.props;

    loadFavorites();
  }

  render() {
    const {offers, authorizationStatus, user, redirectLoginClick, onClickAddFavorite} = this.props;
    const favoriteOffers = offers.slice().sort((it1, it2) => {
      if (it1.city.name > it2.city.name) {
        return 1;
      } else if (it1.city.name < it2.city.name) {
        return -1;
      } else {
        return 0;
      }
    });
    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
    const isFavoriteOffers = offers.length > 0;
    let currentCity = ``;

    return (
      <div className={`page ${!isFavoriteOffers && `page--favorites-empty`}`}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={AppRoute.ROOT} className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    {(isAuth && <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
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

        <main className={`page__main page__main--favorites ${!isFavoriteOffers && `page__main--favorites-empty`}`}>
          <div className="page__favorites-container container">
            {(isFavoriteOffers && <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteOffers.map((locationItem, i) => {
                  if (locationItem.city.name !== currentCity) {
                    currentCity = locationItem.city.name;

                    return (<li key={`${currentCity}-${i}`} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link to={currentCity.toLowerCase()} className="locations__item-link">
                            <span>{currentCity}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {favoriteOffers.map((favoriteCard, j) => {
                          const {id, prevPic, title, type, rating, price, isFavorite} = favoriteCard;

                          if (favoriteCard.city.name === currentCity) {
                            return (<article key={`favorite-offer-${j}`} className="favorites__card place-card">
                              <div className="favorites__image-wrapper place-card__image-wrapper">
                                <Link to={`${AppRoute.OFFER}/${id}`}>
                                  <img className="place-card__image" src={prevPic} width="150" height="110" alt="Place image"/>
                                </Link>
                              </div>
                              <div className="favorites__card-info place-card__info">
                                <div className="place-card__price-wrapper">
                                  <div className="place-card__price">
                                    <b className="place-card__price-value">&euro;{price}</b>
                                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                                  </div>
                                  <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button" onClick={() => {
                                    if (isAuth) {
                                      onClickAddFavorite(id, Number(!isFavorite), FavoriteAction.FAVORITES);
                                    } else {
                                      redirectLoginClick();
                                    }
                                  }}>
                                    <svg className="place-card__bookmark-icon" width="18" height="19">
                                      <use xlinkHref="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">In bookmarks</span>
                                  </button>
                                </div>
                                <div className="place-card__rating rating">
                                  <div className="place-card__stars rating__stars">
                                    <span style={{width: (20 * Math.round(rating)) + `%`}}></span>
                                    <span className="visually-hidden">Rating</span>
                                  </div>
                                </div>
                                <h2 className="place-card__name">
                                  <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
                                </h2>
                                <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                              </div>
                            </article>);
                          }

                          return ``;
                        })}
                      </div>
                    </li>);
                  }

                  return ``;
                })}
              </ul>
            </section>) || <EmptyFavorites/>}
          </div>
        </main>
        <footer className="footer container">
          <Link to={AppRoute.ROOT} className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  offers: mainScreenProp,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    [`avatar_url`]: PropTypes.string,
    [`is_pro`]: PropTypes.bool
  }).isRequired,
  loadFavorites: PropTypes.func.isRequired,
  redirectLoginClick: PropTypes.func.isRequired,
  onClickAddFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(fetchFavoriteOfferList());
  },
  onClickAddFavorite(id, isFavorite, favoriteAction) {
    dispatch(favorite(id, isFavorite, favoriteAction));
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
