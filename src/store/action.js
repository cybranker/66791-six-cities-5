export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_SORT_LIST: `TOGGLE_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_OFFER_ACTIVE: `CHANGE_OFFER_ACTIVE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_USER: `LOAD_USER`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEARBY: `LOAD_NEARBY`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const toggleSortList = () => ({
  type: ActionType.TOGGLE_SORT_LIST
});

export const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType
});

export const changeOfferActive = (activeOffer) => ({
  type: ActionType.CHANGE_OFFER_ACTIVE,
  payload: activeOffer
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const loadNearby = (nearby) => ({
  type: ActionType.LOAD_NEARBY,
  payload: nearby
});

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadUser = (user) => ({
  type: ActionType.LOAD_USER,
  payload: user
});
