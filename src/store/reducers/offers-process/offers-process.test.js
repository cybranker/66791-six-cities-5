import {offersProcess} from "./offers-process";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";
import {city, offers} from "../../../data-test/data-test";

test(`Reducer without additional parameters should return initial state`, () => {
  expect(offersProcess(void 0, {})).toEqual({
    city: cities[0],
    offerActive: {}
  });
});

test(`Reducer should update city by city`, () => {
  expect(offersProcess({
    city: cities[0]
  }, {
    type: ActionType.CHANGE_CITY,
    payload: city
  })).toEqual({
    city
  });
});

test(`Reducer should update offerActive by offerActive`, () => {
  expect(offersProcess({
    offerActive: {}
  }, {
    type: ActionType.CHANGE_OFFER_ACTIVE,
    payload: offers[1]
  })).toEqual({
    offerActive: offers[1]
  });
});
