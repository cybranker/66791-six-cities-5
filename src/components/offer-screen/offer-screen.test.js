import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";
import OfferScreen from "./offer-screen";
import createStore from "../../mocks/mock-store";
import {offers, comments, user, matchID} from "../../data-test/data-test";

const noop = () => {};

test(`Should OfferScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <MemoryRouter>
            <OfferScreen
              loadOffer={noop}
              loadComments={noop}
              loadOffersNearby={noop}
              offer={offers[1]}
              reviews={comments}
              nearby={offers}
              changeOfferActiveAction={noop}
              offerActive={{}}
              authorizationStatus={`AUTH`}
              user={user}
              redirectLoginClick={noop}
              onClickAddFavorite={noop}
              match={matchID}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
