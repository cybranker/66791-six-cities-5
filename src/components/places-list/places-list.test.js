import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";
import {offers} from "../../data-test/data-test";

const noop = () => {};

test(`Should PlacesList render correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      className={`near-places__list`}
      placeType={`near`}
      offers={offers}
      changeOfferActive={noop}
      redirectLoginClick={noop}
      onClickAddFavorite={noop}
      favoriteAction={`nearby`}
      isAuth={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
