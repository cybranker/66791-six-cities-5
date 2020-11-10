import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {SortType} from "../const";

const initialState = {
  city: offers[0].city,
  offers,
  isOpenSortList: false,
  sortType: SortType.DEFAULT
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: typeof action.payload === `string` ? initialState.offers.find((it) => it.city.name === action.payload).city : action.payload
      });
    case ActionType.GET_LIST_OFFERS:
      return extend(state, {
        offers: initialState.offers
      });
    case ActionType.TOGGLE_SORT_LIST:
      return extend(state, {
        isOpenSortList: !state.isOpenSortList
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload
      });
    default:
      return state;
  }
};
