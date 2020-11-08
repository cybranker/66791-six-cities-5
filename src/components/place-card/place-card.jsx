import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {PlaceType} from "../../const";

import placeCardProp from "./place-card.prop";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      pictures,
      isPremium,
      price,
      title,
      type,
      rating,
      isFavorite
    } = this.props.offer;
    const {placeType} = this.props;

    return (
      <article className={`${(placeType === PlaceType.CITIES) ? `cities__place-card` : `near-places__card`} place-card`} onMouseEnter={this.props.onHover}>
        {isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>}
        <div className={`${(placeType === PlaceType.CITIES) ? `cities__image-wrapper` : `near-places__image-wrapper`} place-card__image-wrapper`}>
          <Link to={`/offer/${id}`}>
            <img className="place-card__image" src={pictures[0].src} width="260" height="200" alt={pictures[0].description}/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
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
    );
  }
}

PlaceCard.propTypes = {
  placeType: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  offer: placeCardProp
};

export default PlaceCard;
