import React from "react";
import renderer from "react-test-renderer";
import MemoryRouter from "react-router-dom";
import PlaceCard from "./place-card";
import {offers} from "../../data-test/data-test";

const noop = () => {};

test(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <PlaceCard
        offer={offers[0]}
        placeType={`near`}
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
