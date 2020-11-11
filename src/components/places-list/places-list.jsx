import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

import mainScreenProp from "../main-screen/main-screen.prop";

const PlacesList = ({className, placeType, offers, changeOfferActive}) => {
  return (
    <div className={`places__list ${className}`}>
      {offers.map((offer, i) => (
        <PlaceCard key={`offer-${i}`} placeType={placeType} offer={offer} changeOfferActive={changeOfferActive} />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  placeType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  offers: mainScreenProp,
  changeOfferActive: PropTypes.func.isRequired
};

export default PlacesList;
