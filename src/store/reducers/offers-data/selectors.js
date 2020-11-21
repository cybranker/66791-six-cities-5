export const getOffers = (state) => state.DATA.offers.filter((offer) => offer.city.name === state.PROCESS.city.name);
