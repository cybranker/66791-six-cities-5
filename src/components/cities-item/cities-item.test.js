import React from "react";
import renderer from "react-test-renderer";
import CitiesItem from "./cities-item";
import {city} from "../../data-test/data-test";

const noop = () => {};

test(`Should CitiesItem render correctly`, () => {
  const tree = renderer
    .create(<CitiesItem
      currentCity={city}
      city={city}
      changeCity={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
