import PropTypes from "prop-types";

export default PropTypes.shape({
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    [`avatar_url`]: PropTypes.string.isRequired,
    [`id`]: PropTypes.number.isRequired,
    [`is_pro`]: PropTypes.bool.isRequired,
    [`name`]: PropTypes.string.isRequired
  }).isRequired
}).isRequired;
