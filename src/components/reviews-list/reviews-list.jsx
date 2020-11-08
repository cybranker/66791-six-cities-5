import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";
import reviewsListProp from "./reviews-list.prop";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => (
        <ReviewsItem key={`review-${i}`} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsListProp
};

export default ReviewsList;
