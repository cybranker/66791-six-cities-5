import {createSelector} from "reselect";
import {getCity} from "../offers-process/selectors";

export const getOffers = (state) => state.DATA.offers;

export const getCities = (state) => state.DATA.cities;

export const getOffersCurrentCity = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);
