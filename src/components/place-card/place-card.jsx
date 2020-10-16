import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="cities__place-card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;120</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: 80 + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Beautiful &amp; luxurious apartment at great location</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  handelHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf([
      OfferType.APARTMENT,
      OfferType.HOTEL,
      OfferType.HOUSE,
      OfferType.ROOM
    ]).isRequired,
    rating: PropTypes.number.isRequired,
    numberBedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    manager: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired
    }).isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired
};

export default PlaceCard;
