import React from "react";
import renderer from "react-test-renderer";
import CitiesItem from "./cities-item";
import {MemoryRouter} from "react-router";
import {city} from "../../data-test/data-test";

const noop = () => {};

test(`Should CitiesItem render correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <CitiesItem
        currentCity={city}
        city={city}
        changeCity={noop}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
