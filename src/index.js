import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";


const NUMBER_PLACES = 236;

ReactDOM.render(
    <App
      numberPlaces={NUMBER_PLACES}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
