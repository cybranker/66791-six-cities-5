import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

import mainScreenProp from "../main-screen/main-screen.prop";

const PlacesList = (props) => {
  const {
    className,
    placeType,
    offers,
    changeOfferActive,
    redirectLoginClick,
    onClickAddFavorite,
    favoriteAction,
    isAuth
  } = props;

  return (
    <div className={`places__list ${className}`}>
      {offers.map((offer, i) => (
        <PlaceCard key={`offer-${i}`} placeType={placeType} offer={offer} changeOfferActive={changeOfferActive} isAuth={isAuth} redirectLoginClick={redirectLoginClick} onClickAddFavorite={onClickAddFavorite} favoriteAction={favoriteAction}/>
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  placeType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  offers: mainScreenProp,
  changeOfferActive: PropTypes.func.isRequired,
  redirectLoginClick: PropTypes.func.isRequired,
  onClickAddFavorite: PropTypes.func.isRequired,
  favoriteAction: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default PlacesList;
