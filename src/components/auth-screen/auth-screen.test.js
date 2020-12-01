import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";

import AuthScreen from "./auth-screen";
import createStore from "../../mocks/mock-store";

test(`Should AuthScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <MemoryRouter>
            <AuthScreen />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
