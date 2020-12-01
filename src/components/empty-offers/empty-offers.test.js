import React from "react";
import renderer from "react-test-renderer";
import EmptyOffers from "./empty-offers";
import {city} from "../../data-test/data-test";

test(`Should EmptyOffers render correctly`, () => {
  const tree = renderer
    .create(<EmptyOffers
      city={city}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
