import React from "react";
import PropTypes from 'prop-types';
import {SortType} from "../../const";

const SortList = ({isOpenSortList, sortType, toggleSortList, changeSortType}) => {
  return (
    <ul className={`places__options places__options--custom ${isOpenSortList && `places__options--opened`}`} onClick={toggleSortList}>
      <li className={`places__option ${sortType === SortType.DEFAULT && `places__option--active`}`} tabIndex="0" onClick={() => {
        changeSortType(SortType.DEFAULT);
      }}>Popular</li>
      <li className={`places__option ${sortType === SortType.PRICE_LOW_TO_HIGH && `places__option--active`}`} tabIndex="0" onClick={() => {
        changeSortType(SortType.PRICE_LOW_TO_HIGH);
      }}>Price: low to high</li>
      <li className={`places__option ${sortType === SortType.PRICE_HIGH_TO_LOW && `places__option--active`}`} tabIndex="0" onClick={() => {
        changeSortType(SortType.PRICE_HIGH_TO_LOW);
      }}>Price: high to low</li>
      <li className={`places__option ${sortType === SortType.TOP_RATED && `places__option--active`}`} tabIndex="0" onClick={() => {
        changeSortType(SortType.TOP_RATED);
      }}>Top rated first</li>
    </ul>
  );
};

export default SortList;
