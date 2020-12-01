import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";
import FavoritesScreen from "./favorites-screen";
import {offers, user} from "../../data-test/data-test";
import createStore from "../../mocks/mock-store";

const noop = () => {};

test(`Should FavoriteScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <MemoryRouter>
            <FavoritesScreen
              authorizationStatus={`AUTH`}
              loadFavorites={noop}
              offers={offers}
              onClickAddFavorite={noop}
              redirectLoginClick={noop}
              user={user}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

