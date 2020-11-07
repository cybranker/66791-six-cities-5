import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const initialState = {
  city: offers[0].city,
  offers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_LIST_OFFERS:
      return extend(state, {
        offers: initialState.offers
      });
    default:
      return state;
  }
};
