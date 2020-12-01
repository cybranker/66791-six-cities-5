import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import ReviewForm from "./review-form";
import createStore from "../../mocks/mock-store";

const noop = () => {};

test(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <ReviewForm
            id={9}
            numberComments={3}
            onFieldChange={noop}
            onSubmit={noop}
            stateForm={{}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

