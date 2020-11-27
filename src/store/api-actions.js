import {
  loadUser,
  loadFavoriteOffers,
  loadOffers,
  requireAuthorization,
  redirectToRoute,
  loadOffer,
  loadComments,
  loadNearby,
  installFavoriteNearby,
  installFavoriteOffers,
  installFavoriteFavorites
} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute, FavoriteAction} from "../const";
import {adaptOffersToClient} from "../adapt";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOffersToClient))))
);

export const fetchFavoriteOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
    .catch((err) => {
      throw err;
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadOffer([data].map(adaptOffersToClient)[0])))
    .catch((err) => {
      throw err;
    })
);

export const fetchCommentList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch((err) => {
      throw err;
    })
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(loadNearby(data.map(adaptOffersToClient))))
    .catch((err) => {
      throw err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadUser(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(loadUser(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const fetchWithComment = (id, sendData) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, sendData)
    .then(({data}) => dispatch(loadComments(data)))
    .catch((err) => {
      throw err;
    })
);

export const favorite = (id, isFavorite, favoriteAction) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${isFavorite}`)
    .then(({data}) => {
      switch (favoriteAction) {
        case FavoriteAction.OFFERS:
          dispatch(installFavoriteOffers([data].map(adaptOffersToClient)[0]));
          break;
        case FavoriteAction.NEARBY:
          dispatch(installFavoriteNearby([data].map(adaptOffersToClient)[0]));
          break;
        case FavoriteAction.FAVORITES:
          dispatch(installFavoriteFavorites([data].map(adaptOffersToClient)[0]));
          break;
        default:
          dispatch(loadOffer([data].map(adaptOffersToClient)[0]));
      }
    })
    .catch((err) => {
      throw err;
    })
);
