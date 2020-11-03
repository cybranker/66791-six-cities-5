export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_LIST_OFFERS: `GET_LIST_OFFERS`
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
  }),
  getListOffers: () => ({
    type: ActionType.GET_LIST_OFFERS
  })
};
