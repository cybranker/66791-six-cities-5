import React from "react";
import reviewsItemProp from "./reviews-item.prop";

const ReviewsItem = ({review}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.picture} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{review.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: (20 * Math.round(review.rating)) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date.toLocaleDateString(`en-US`, {year: `numeric`, month: `long`})}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewsItemProp
};

export default ReviewsItem;
