import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import AuthScreen from "../auth-screen/auth-screen";

import mainScreenProp from "../main-screen/main-screen.prop";

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route exact path="/offer/:id"
          render={(params) => <OfferScreen offers={offers} reviews={reviews} {...params}/>}
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/:city?"
          render={(params) => <MainScreen offers={offers} {...params}/>}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: mainScreenProp,
  reviews: PropTypes.array.isRequired
};


export default App;
