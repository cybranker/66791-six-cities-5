import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: `Amsterdam`,
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
        offers: action.payload
      });
    default:
      return state;
  }
};
