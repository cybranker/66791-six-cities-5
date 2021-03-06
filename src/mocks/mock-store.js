import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

export default () => configureStore([thunk])({
  PROCESS: {
    city: {
      location: {
        lat: 48.85661,
        lon: 2.351499,
        zoom: 10
      },
      name: `Paris`
    },
    offerActive: {}
  },
  DATA: {
    offers: [],
    favoriteOffers: [],
    cities: [{
      location: {
        lat: 48.85661,
        lon: 2.351499,
        zoom: 10
      },
      name: `Paris`
    }],
    offer: {},
    comments: [],
    offerNearby: []
  },
  SORT: {
    isOpenSortList: false,
    sortType: `test`
  },
  USER: {
    authorizationStatus: `test`,
    user: {}
  }
});
