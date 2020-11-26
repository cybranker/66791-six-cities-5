import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import AuthScreen from "../auth-screen/auth-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesScreen/>
            );
          }}
        />
        <Route exact path={`${AppRoute.OFFER}/:id`}
          render={(params) => <OfferScreen {...params}/>}
        />
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path={`${AppRoute.ROOT}:city?`}
          render={(params) => <MainScreen {...params}/>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
