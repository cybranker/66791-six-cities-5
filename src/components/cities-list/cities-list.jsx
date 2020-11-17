import React from "react";
import PropTypes from "prop-types";
import CitiesItem from "../cities-item/cities-item";
import cities from "../../mocks/cities";

const CitiesList = ({currentCity, changeCity, getListOffers}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <CitiesItem key={`city-${i}`} city={city} changeCity={changeCity} getListOffers={getListOffers} currentCity={currentCity} />
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  changeCity: PropTypes.func.isRequired,
  getListOffers: PropTypes.func.isRequired
};

export default CitiesList;
