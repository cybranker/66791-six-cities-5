import React from "react";
import renderer from "react-test-renderer";
import SortList from "./sort-list";

const noop = () => {};

test(`Should SortList render correctly`, () => {
  const tree = renderer
    .create(<SortList
      isOpenSortList={false}
      sortType={`popular`}
      toggleSortList={noop}
      changeSortType={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
