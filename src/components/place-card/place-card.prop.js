import PropTypes from "prop-types";
import {OfferType} from "../../const";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  pictures: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  prevPic: PropTypes.string.isRequired,
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
  isFavorite: PropTypes.bool.isRequired,
  coordinates: PropTypes.shape({
    lon: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired
}).isRequired;
