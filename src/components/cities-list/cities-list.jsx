import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesItem from "../cities-item/cities-item";

import {getCities} from "../../store/reducers/offers-data/selectors";

const CitiesList = ({currentCity, changeCity, cities}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <CitiesItem key={`city-${i}`} city={city} changeCity={changeCity} currentCity={currentCity} />
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
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        location: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }).isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  cities: getCities(state)
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
