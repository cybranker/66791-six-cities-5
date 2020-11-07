import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CitiesItem = ({currentCity, city, changeCity, getListOffers}) => {
  city = JSON.parse(city);

  return (
    <li className="locations__item">
      <Link to={`/${city.name.toLowerCase()}`} onClick={() => {
        changeCity(city);
        getListOffers();
      }} className={`locations__item-link tabs__item ${city.name === currentCity.name && `tabs__item--active`}`}>
        <span>{city.name}</span>
      </Link>
    </li>
  );
};

export default CitiesItem;
