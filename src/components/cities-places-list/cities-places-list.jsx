import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import {PlaceType} from "../../const";

const CitiesPlacesList = (props) => {
  const {className = ``, ...restProps} = props;

  return (
    <PlacesList className={`cities__places-list tabs__content ${className}`} placeType={PlaceType.CITIES} {...restProps}/>
  );
};

CitiesPlacesList.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.array.isRequired
};

export default CitiesPlacesList;
