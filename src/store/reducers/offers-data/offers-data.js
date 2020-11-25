import {extend} from "../../../utils";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";

const initialState = {
  offers: [],
  favoriteOffers: [],
  cities,
  offer: {},
  comments: [],
  offerNearby: []
};

export const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
      });
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    case ActionType.LOAD_NEARBY:
      return extend(state, {
        offerNearby: action.payload
      });
    default:
      return state;
  }
};
