export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_LIST_OFFERS: `GET_LIST_OFFERS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getListOffers: (city) => ({
    type: ActionType.GET_LIST_OFFERS,
    payload: city
  })
};
