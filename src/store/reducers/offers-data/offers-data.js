import {extend} from "../../../utils";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";

const initialState = {
  offers: [],
  cities
};

export const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    default:
      return state;
  }
};
