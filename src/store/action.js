export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_SORT_LIST: `TOGGLE_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_OFFER_ACTIVE: `CHANGE_OFFER_ACTIVE`,
  LOAD_OFFERS: `LOAD_OFFERS`
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
