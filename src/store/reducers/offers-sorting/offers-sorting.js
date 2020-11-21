import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {SortType} from "../../../const";

const initialState = {
  isOpenSortList: false,
  sortType: SortType.DEFAULT
};

export const offersSorting = (state = initialState, action) => {
  switch (action.type) {
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
