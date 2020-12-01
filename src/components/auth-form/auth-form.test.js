import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import AuthForm from "./auth-form";

import createStore from "../../mocks/mock-store";

const noop = () => {};

test(`Should AuthForm render correctly`, () => {
  const tree = renderer
    .create(<Provider store={createStore()}>
      <AuthForm
        onFieldChange={noop}
        stateForm={{}}
        onSubmit={noop}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
