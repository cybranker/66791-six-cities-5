import {offersSorting} from "./offers-sorting";
import {ActionType} from "../../action";
import {SortType} from "../../../const";

test(`Reducer without additional parameters should return initial state`, () => {
  expect(offersSorting(void 0, {})).toEqual({
    isOpenSortList: false,
    sortType: SortType.DEFAULT
  });
});

test(`Reducer should update isOpenSortList by isOpenSortList`, () => {
  expect(offersSorting({
    isOpenSortList: false
  }, {
    type: ActionType.TOGGLE_SORT_LIST
  })).toEqual({
    isOpenSortList: true
  });
});

test(`Reducer should update sortType by sortType`, () => {
  expect(offersSorting({
    sortType: SortType.DEFAULT
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: SortType.PRICE_HIGH_TO_LOW
  })).toEqual({
    sortType: SortType.PRICE_HIGH_TO_LOW
  });
});
