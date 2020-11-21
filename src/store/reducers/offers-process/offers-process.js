import {extend} from "../../../utils";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";

const initialState = {
  city: cities[0],
  offerActive: {}
};

export const offersProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: typeof action.payload === `string` ? cities.find((it) => it.name === action.payload) : action.payload
      });
    case ActionType.CHANGE_OFFER_ACTIVE:
      return extend(state, {
        offerActive: action.payload
      });
    default:
      return state;
  }
};
