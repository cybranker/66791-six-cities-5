import React from "react";
import PropTypes from "prop-types";

const EmptyOffers = ({city}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

EmptyOffers.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default EmptyOffers;
