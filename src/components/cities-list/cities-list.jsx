import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesItem from "../cities-item/cities-item";

const CitiesList = ({currentCity, offers, changeCity, getListOffers}) => {
  const cities = [];

  offers.forEach((offer) => {
    const city = JSON.stringify(offer.city);

    if (!cities.includes(city)) {
      cities.push(city);
    }
  });

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <CitiesItem key={`city-${i}`} city={city} changeCity={changeCity} getListOffers={getListOffers} currentCity={currentCity} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export default connect(mapStateToProps)(CitiesList);
