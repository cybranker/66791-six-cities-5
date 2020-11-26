import {createSelector} from "reselect";
import {getCity} from "../offers-process/selectors";

export const getOffers = (state) => state.DATA.offers;

export const getOffer = (state) => state.DATA.offer;

export const getComments = (state) => state.DATA.comments;

export const getOfferNearby = (state) => state.DATA.offerNearby;

export const getFavoriteOffers = (state) => state.DATA.favoriteOffers;

export const getCities = (state) => state.DATA.cities;

export const getOffersCurrentCity = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);
