import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";

const comment = {
  comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
  date: `2020-10-25T13:38:44.753Z`,
  id: 1,
  rating: 3,
  user: {
    [`avatar_url`]: ``,
    id: 13,
    [`is_pro`]: false,
    name: `Zak`
  }
};

it(`Should ReviewsItem render correctly`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={comment}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
