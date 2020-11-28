import React from "react";
import ReviewsItem from "../reviews-item/reviews-item";
import reviewsListProp from "./reviews-list.prop";
import {MAX_REVIEWS_COUNT} from "../../const";

const ReviewsList = ({reviews}) => {
  const maxReviewsRender = reviews
    .sort((rev1, rev2) => new Date(rev2.date) - new Date(rev1.date))
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {maxReviewsRender.map((review, i) => (
        <ReviewsItem key={`review-${i}`} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsListProp
};

export default ReviewsList;
