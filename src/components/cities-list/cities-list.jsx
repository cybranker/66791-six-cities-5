import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesItem from "../cities-item/cities-item";

import mainScreenProp from "../main-screen/main-screen.prop";

const CitiesList = ({currentCity, offers, changeCity, getListOffers}) => {
  let cities = {};

  offers.forEach((offer) => {
    cities[offer.city.name] = offer.city;
  });

  cities = Object.values(cities);

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
  offers: mainScreenProp,
  changeCity: PropTypes.func.isRequired,
  getListOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export default connect(mapStateToProps)(CitiesList);
