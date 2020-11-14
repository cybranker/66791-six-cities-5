export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ``;
};

export const sortPriceLowToHigh = (offerA, offerB) => {
  const offerAPrice = offerA.price;
  const offerBPrice = offerB.price;

  return offerAPrice - offerBPrice;
};

export const sortPriceHighToLow = (offerA, offerB) => {
  const offerAPrice = offerA.price;
  const offerBPrice = offerB.price;

  return offerBPrice - offerAPrice;
};

export const sortRated = (offerA, offerB) => {
  const offerARating = offerA.rating;
  const offerBRating = offerB.rating;

  return offerBRating - offerARating;
};
