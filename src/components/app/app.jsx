import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import AuthScreen from "../auth-screen/auth-screen";


const App = (props) => {
  const {numberPlaces} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen numberPlaces={numberPlaces} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  numberPlaces: PropTypes.number.isRequired
};


export default App;
