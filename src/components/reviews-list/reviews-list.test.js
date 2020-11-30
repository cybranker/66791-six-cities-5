import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {comments} from "../../data-test/data-test";

test(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={comments}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
