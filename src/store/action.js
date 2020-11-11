export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_LIST_OFFERS: `GET_LIST_OFFERS`,
  TOGGLE_SORT_LIST: `TOGGLE_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_OFFER_ACTIVE: `CHANGE_OFFER_ACTIVE`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getListOffers: () => ({
    type: ActionType.GET_LIST_OFFERS
  }),
  toggleSortList: () => ({
    type: ActionType.TOGGLE_SORT_LIST
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeOfferActive: (activeOffer) => ({
    type: ActionType.CHANGE_OFFER_ACTIVE,
    payload: activeOffer
  })
};
