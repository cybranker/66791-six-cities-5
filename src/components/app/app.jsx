import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import AuthScreen from "../auth-screen/auth-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return (
              <FavoritesScreen/>
            );
          }}
        />
        <Route exact path="/offer/:id"
          render={(params) => <OfferScreen reviews={reviews} {...params}/>}
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/:city?"
          render={(params) => <MainScreen {...params}/>}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.array.isRequired
};


export default App;
