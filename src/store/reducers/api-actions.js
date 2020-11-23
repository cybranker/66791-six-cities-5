import {loadOffers} from "../action";
import {adaptOffersToClient} from "../../adapt";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOffersToClient))))
);
