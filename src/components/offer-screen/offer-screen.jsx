import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import ReviewsList from "../reviews-list/reviews-list";
import ReviewForm from "../review-form/review-form";
import Map from "../map/map";
import {changeOfferActive} from "../../store/action";
import NearPlacesList from "../near-places-list/near-places-list";
import {fetchOffer, fetchCommentList, fetchOffersNearby, favorite} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus, FavoriteAction} from "../../const";

import {getOffer, getComments, getOfferNearby} from "../../store/reducers/offers-data/selectors";
import {getCity, getOfferActive} from "../../store/reducers/offers-process/selectors";
import {getAuthorizationStatus, getUser} from "../../store/reducers/user/selectors";

import placeCardProp from "../place-card/place-card.prop";
import reviewsListProp from "../reviews-list/reviews-list.prop";
import mainScreenProp from "../main-screen/main-screen.prop";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const {loadOffer, loadComments, loadOffersNearby} = this.props;

    loadOffer(id);
    loadComments(id);
    loadOffersNearby(id);
  }

  render() {
    const {
      offer,
      reviews,
      city,
      nearby,
      changeOfferActiveAction,
      offerActive,
      authorizationStatus,
      user,
      redirectLoginClick,
      onClickAddFavorite
    } = this.props;

    if (Object.keys(offer).length !== 0) {
      const {
        id,
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
      const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
      const isNearby = nearby.length > 0;

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

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {pictures.map((picture, i) => (
                    <div key={`${i}-${picture}`} className="property__image-wrapper">
                      <img className="property__image" src={picture} alt=""/>
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
                    <button className={`property__bookmark-button ${isFavorite && `property__bookmark-button--active`} button`} type="button" onClick={() => {
                      if (isAuth) {
                        onClickAddFavorite(id, Number(!isFavorite), FavoriteAction.OFFER);
                      } else {
                        redirectLoginClick();
                      }
                    }}>
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
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                    <ReviewsList reviews={reviews} />
                    {isAuth && <ReviewForm id={id}/>}
                  </section>
                </div>
              </div>
              {isNearby && <section className="property__map map">
                <Map offers={nearby} currentCity={city} offerActive={offerActive}/>
              </section>}
            </section>
            <div className="container">
              {isNearby && <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <NearPlacesList
                  offers={nearby}
                  changeOfferActive={changeOfferActiveAction}
                  isAuth={isAuth}
                  redirectLoginClick={redirectLoginClick}
                  favoriteAction={FavoriteAction.NEARBY}
                  onClickAddFavorite={onClickAddFavorite}
                />
              </section>}
            </div>
          </main>
        </div>
      );
    }

    return ``;
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
  offer: placeCardProp,
  reviews: reviewsListProp,
  loadOffer: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  changeOfferActiveAction: PropTypes.func.isRequired,
  offerActive: PropTypes.oneOfType([PropTypes.shape(), placeCardProp]).isRequired,
  nearby: mainScreenProp,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    [`avatar_url`]: PropTypes.string,
    [`is_pro`]: PropTypes.bool
  }).isRequired,
  redirectLoginClick: PropTypes.func.isRequired,
  onClickAddFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offer: getOffer(state),
  reviews: getComments(state),
  nearby: getOfferNearby(state),
  offerActive: getOfferActive(state),
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
  loadComments(id) {
    dispatch(fetchCommentList(id));
  },
  loadOffersNearby(id) {
    dispatch(fetchOffersNearby(id));
  },
  changeOfferActiveAction(activeOffer) {
    dispatch(changeOfferActive(activeOffer));
  },
  onClickAddFavorite(id, isFavorite, favoriteAction) {
    dispatch(favorite(id, isFavorite, favoriteAction));
  }
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
