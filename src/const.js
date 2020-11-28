export const OfferType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`
};

export const PlaceType = {
  CITIES: `cities`,
  NEAR: `near`
};

export const SortType = {
  DEFAULT: `popular`,
  PRICE_LOW_TO_HIGH: `price-low-to-high`,
  PRICE_HIGH_TO_LOW: `price-high-to-low`,
  TOP_RATED: `top-rated`
};

export const SortTypeName = {
  [SortType.DEFAULT]: `Popular`,
  [SortType.PRICE_LOW_TO_HIGH]: `Price: low to high`,
  [SortType.PRICE_HIGH_TO_LOW]: `Price: high to low`,
  [SortType.TOP_RATED]: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FavoriteAction = {
  NEARBY: `nearby`,
  OFFER: `offer`,
  OFFERS: `offers`,
  FAVORITES: `favorites`
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  ROOT: `/`
};

export const APIRoute = {
  HOTELS: `/hotels`,
  NEARBY: `/nearby`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`
};

export const MAX_REVIEWS_COUNT = 10;
