import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import {PlaceType} from "../../const";

const NearPlacesList = (props) => {
  const {className = ``, ...restProps} = props;

  return (
    <PlacesList className={`near-places__list ${className}`} placeType={PlaceType.NEAR} {...restProps}/>
  );
};

NearPlacesList.propTypes = {
  className: PropTypes.string,
  offers: PropTypes.array.isRequired
};

export default NearPlacesList;
