import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import ReviewsList from "../reviews-list/reviews-list";
import ReviewForm from "../review-form/review-form";
import Map from "../map/map";
import NearPlacesList from "../near-places-list/near-places-list";
import {AppRoute} from "../../const";

import {getOffersCurrentCity} from "../../store/reducers/offers-data/selectors";
import {getCity} from "../../store/reducers/offers-process/selectors";

import mainScreenProp from "../main-screen/main-screen.prop";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, reviews, city} = this.props;
    const id = this.props.match.params.id;
    const restOffers = [...offers];
    const offer = restOffers.splice(id, 1)[0];
    const currentReviews = reviews.filter((review) => review.id === parseInt(id, 10));

    if (id >= offers.length || !offer) {
      return (
        <Redirect to={AppRoute.ROOT} />
      );
    }

    const {
      description,
      features,
      isFavorite,
      isPremium,
      manager,
      maxGuests,
      numberBedrooms,
      pictures,
      price,
      rating,
      title,
      type
    } = offer;

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
                    <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
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

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {pictures.map((picture, i) => (
                  <div key={`${i}-${picture.src}`} className="property__image-wrapper">
                    <img className="property__image" src={picture.src} alt={picture.description}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={`property__bookmark-button ${isFavorite && `property__bookmark-button--active`} button`} type="button">
                    <svg className={`property__bookmark-icon ${isFavorite && `place-card__bookmark-icon`}`} width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: (20 * Math.round(rating)) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {numberBedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxGuests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {features.map((feature, i) => (
                      <li key={`feature-${i}`} className="property__inside-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${manager.isSuper && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={manager.picture} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">{manager.name}</span>
                    {manager.isSuper && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    {description.map((item, i) => (
                      <p key={`property-${i}`} className="property__text">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentReviews[0].reviews.length}</span></h2>
                  <ReviewsList reviews={currentReviews[0].reviews} />
                  <ReviewForm/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={restOffers} currentCity={city}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearPlacesList offers={restOffers}/>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              picture: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              date: PropTypes.object.isRequired,
              comment: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
      }).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffersCurrentCity(state)
});

export {OfferScreen};
export default connect(mapStateToProps)(OfferScreen);
