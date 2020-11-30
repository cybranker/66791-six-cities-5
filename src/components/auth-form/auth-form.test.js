import React from "react";
import renderer from "react-test-renderer";
import AuthForm from "./auth-form";

const noop = () => {};

test(`Should AuthForm render correctly`, () => {
  const tree = renderer
    .create(<AuthForm
      onFieldChange={noop}
      stateForm={{}}
      onSubmit={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
