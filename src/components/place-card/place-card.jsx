import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {PlaceType, AppRoute} from "../../const";

import placeCardProp from "./place-card.prop";

const PlaceCard = (props) => {
  const {offer, placeType, changeOfferActive, redirectLoginClick, onClickAddFavorite, favoriteAction, isAuth} = props;
  const {
    id,
    isPremium,
    price,
    title,
    type,
    rating,
    prevPic,
    isFavorite
  } = offer;

  return (
    <article className={`${(placeType === PlaceType.CITIES) ? `cities__place-card` : `near-places__card`} place-card`} onMouseEnter={() => {
      changeOfferActive(offer);
    }} onMouseLeave={() => {
      changeOfferActive({});
    }}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${(placeType === PlaceType.CITIES) ? `cities__image-wrapper` : `near-places__image-wrapper`} place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={prevPic} width="260" height="200" alt=""/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button" onClick={() => {
            if (isAuth) {
              onClickAddFavorite(id, Number(!isFavorite), favoriteAction);
            } else {
              redirectLoginClick();
            }
          }}>
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
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  placeType: PropTypes.string.isRequired,
  offer: placeCardProp,
  changeOfferActive: PropTypes.func.isRequired,
  redirectLoginClick: PropTypes.func.isRequired,
  onClickAddFavorite: PropTypes.func.isRequired,
  favoriteAction: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default PlaceCard;
