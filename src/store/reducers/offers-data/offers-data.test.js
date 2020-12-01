import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {offersData} from "./offers-data";
import {ActionType} from "../../action";
import {fetchOfferList, fetchFavoriteOfferList, fetchCommentList, fetchOffersNearby} from "../../api-actions";
import {APIRoute} from "../../../const";
import {offers, comments} from "../../../data-test/data-test";
import cities from "../../../mocks/cities";

const api = createAPI(() => {});

test(`Reducer without additional parameters should return initial state`, () => {
  expect(offersData(void 0, {})).toEqual({
    offers: [],
    favoriteOffers: [],
    cities,
    offer: {},
    comments: [],
    offerNearby: []
  });
});

test(`Reducer should update offers by load offers`, () => {
  expect(offersData({
    offers: []
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })).toEqual({
    offers
  });
});

test(`Reducer should update favoriteOffers by load favoriteOffers`, () => {
  expect(offersData({
    favoriteOffers: []
  }, {
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers
  })).toEqual({
    favoriteOffers: offers
  });
});

test(`Reducer should update offer by load offer`, () => {
  expect(offersData({
    offer: {}
  }, {
    type: ActionType.LOAD_OFFER,
    payload: offers[0]
  })).toEqual({
    offer: offers[0]
  });
});

test(`Reducer should update comments by load comments`, () => {
  expect(offersData({
    comments: []
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  })).toEqual({
    comments
  });
});

test(`Reducer should update offerNearby by load offerNearby`, () => {
  expect(offersData({
    offerNearby: []
  }, {
    type: ActionType.LOAD_NEARBY,
    payload: offers
  })).toEqual({
    offerNearby: offers
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchOfferList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, []);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavoriteOfferList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, []);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommentList(`6`);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/6`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyLoader = fetchOffersNearby(`6`);

    apiMock
      .onGet(`${APIRoute.HOTELS}/6${APIRoute.NEARBY}`)
      .reply(200, []);

    return nearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: [],
        });
      });
  });
});
