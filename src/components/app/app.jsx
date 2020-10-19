import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import AuthScreen from "../auth-screen/auth-screen";


const App = (props) => {
  const {numberPlaces, offers, reviews} = props;

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
        <Route exact path="/:city?">
          <MainScreen numberPlaces={numberPlaces} offers={offers} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  numberPlaces: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};


export default App;
