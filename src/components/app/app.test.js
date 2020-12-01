import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import App from "./app";
import createStore from "../../mocks/mock-store";

test(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
