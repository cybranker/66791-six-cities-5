import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortList from "./sort-list";

configure({adapter: new Adapter()});

test(`click on "Change Sort Type" button`, () => {
  const toggleSortList = jest.fn();
  const changeSortType = jest.fn();

  const wrapper = shallow(
      <SortList
        isOpenSortList={false}
        sortType={`popular`}
        toggleSortList={toggleSortList}
        changeSortType={changeSortType}
      />
  );

  wrapper.find(`.places__options`).simulate(`click`);
  expect(toggleSortList).toHaveBeenCalledTimes(1);
});
