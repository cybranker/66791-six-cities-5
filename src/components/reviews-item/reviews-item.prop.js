import PropTypes from "prop-types";

export default PropTypes.shape({
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  comment: PropTypes.string.isRequired
}).isRequired;
