import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: []
};

export const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_OFFERS:
      return extend(state, {
        offers: initialState.offers
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    default:
      return state;
  }
};
