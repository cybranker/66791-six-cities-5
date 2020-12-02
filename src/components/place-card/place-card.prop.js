import PropTypes from "prop-types";
import {OfferType} from "../../const";

export default PropTypes.shape({
  id: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }),
  pictures: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  prevPic: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  isPremium: PropTypes.bool,
  type: PropTypes.oneOf([
    OfferType.APARTMENT,
    OfferType.HOTEL,
    OfferType.HOUSE,
    OfferType.ROOM
  ]),
  rating: PropTypes.number,
  numberBedrooms: PropTypes.number,
  maxGuests: PropTypes.number,
  price: PropTypes.number,
  features: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  manager: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired
  }),
  isFavorite: PropTypes.bool,
  coordinates: PropTypes.shape({
    lon: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  })
}).isRequired;
