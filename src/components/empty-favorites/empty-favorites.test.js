import React from "react";
import renderer from "react-test-renderer";
import EmptyFavorites from "./empty-favorites";

test(`Should EmptyFavorites render correctly`, () => {
  const tree = renderer
    .create(<EmptyFavorites />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
