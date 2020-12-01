import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";
import CitiesList from "./cities-list";
import cities from "../../mocks/cities";
import {city} from "../../data-test/data-test";
import createStore from "../../mocks/mock-store";

const noop = () => {};

test(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <MemoryRouter>
            <CitiesList
              currentCity={city}
              changeCity={noop}
              cities={cities}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
