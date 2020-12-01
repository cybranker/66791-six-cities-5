import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router";
import PlacesList from "./places-list";
import {offers} from "../../data-test/data-test";

const noop = () => {};

test(`Should PlacesList render correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <PlacesList
        className={`near-places__list`}
        placeType={`near`}
        offers={offers}
        changeOfferActive={noop}
        redirectLoginClick={noop}
        onClickAddFavorite={noop}
        favoriteAction={`nearby`}
        isAuth={true}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
