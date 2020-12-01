import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";
import MainScreen from "./main-screen";
import {city, user, match} from "../../data-test/data-test";
import createStore from "../../mocks/mock-store";

const noop = () => {};

test(`Should MainScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore()}>
          <MemoryRouter>
            <MainScreen
              city={city}
              isOpenSortList={false}
              sortType={`popular`}
              changeCityAction={noop}
              toggleSortListAction={noop}
              changeSortTypeAction={noop}
              offerActive={{}}
              changeOfferActiveAction={noop}
              authorizationStatus={`AUTH`}
              user={user}
              match={match}
              redirectLoginClick={noop}
              onClickAddFavorite={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
