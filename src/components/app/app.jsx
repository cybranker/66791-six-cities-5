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
          render={({history}) => {
            return (
              <FavoritesScreen redirectLoginClick={() => history.push(AppRoute.LOGIN)}/>
            );
          }}
        />
        <Route exact path={`${AppRoute.OFFER}/:id`}
          render={(params) => <OfferScreen redirectLoginClick={() => params.history.push(AppRoute.LOGIN)} key={params.match.params.id} {...params}/>}
        />
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path={`${AppRoute.ROOT}:city?`}
          render={(params) => <MainScreen redirectLoginClick={() => params.history.push(AppRoute.LOGIN)} {...params}/>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
