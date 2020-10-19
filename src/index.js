import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";


const NUMBER_PLACES = 4;

ReactDOM.render(
    <App
      numberPlaces={NUMBER_PLACES}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
