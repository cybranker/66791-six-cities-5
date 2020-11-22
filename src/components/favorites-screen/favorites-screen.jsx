import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getOffers} from "../../store/reducers/offers-data/selectors";

import mainScreenProp from "../main-screen/main-screen.prop";

const FavoritesScreen = ({offers}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
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
                        <Link to={`/offer/${id}`}>
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
                          <Link to={`/offer/${id}`}>{title}</Link>
                        </h2>
                        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: mainScreenProp
};

const mapStateToProps = (state) => ({
  offers: getOffers(state)
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
