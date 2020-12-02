import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router";
import CitiesPlacesList from "./cities-places-list";
import {offers} from "../../data-test/data-test";

const noop = () => {};

test(`Should CitiesPlacesList render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <CitiesPlacesList
            offers={offers}
            changeOfferActive={noop}
            isAuth={true}
            redirectLoginClick={noop}
            favoriteAction={`offers`}
            onClickAddFavorite={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
