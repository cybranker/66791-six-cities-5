import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => (
        <ReviewsItem key={`review-${i}}`} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,
        comment: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default ReviewsList;
