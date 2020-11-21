import {combineReducers} from "redux";
import {offersData} from "./offers-data/offers-data";
import {offersProcess} from "./offers-process/offers-process";
import {offersSorting} from "./offers-sorting/offers-sorting";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  SORT: `SORT`
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.PROCESS]: offersProcess,
  [NameSpace.SORT]: offersSorting
});
