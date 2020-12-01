import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";
import {comment} from "../../data-test/data-test";

test(`Should ReviewsItem render correctly`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={comment}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
