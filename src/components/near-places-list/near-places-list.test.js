import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router";
import NearPlacesList from "./near-places-list";
import {offers} from "../../data-test/data-test";

const noop = () => {};

test(`Should NearPlacesList render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <NearPlacesList
            offers={offers}
            changeOfferActive={noop}
            isAuth={true}
            redirectLoginClick={noop}
            favoriteAction={`nearby`}
            onClickAddFavorite={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
