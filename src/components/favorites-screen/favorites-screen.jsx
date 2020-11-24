import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchFavoriteOfferList} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from "../../const";
import EmptyFavorites from "../empty-favorites/empty-favorites";

import {getFavoriteOffers} from "../../store/reducers/offers-data/selectors";
import {getAuthorizationStatus, getUser} from "../../store/reducers/user/selectors";

import mainScreenProp from "../main-screen/main-screen.prop";

const FavoritesScreen = ({offers, authorizationStatus, user, onClickFavorite}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
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
                  {(authorizationStatus === AuthorizationStatus.AUTH && <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile" onClick={() => {
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {(offers.length > 0 && <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map(({id, pictures, title, type, rating, price, isFavorite}, i) => (
                    <article key={`favorite-offer-${i}`} className="favorites__card place-card">
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <Link to={`${AppRoute.OFFER}/${id}`}>
                          <img className="place-card__image" src={pictures[0].src} width="150" height="110" alt="Place image"/>
                        </Link>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button">
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
                    </article>
                  ))}
                </div>
              </li>
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
};

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
  onClickFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClickFavorite() {
    dispatch(fetchFavoriteOfferList());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
