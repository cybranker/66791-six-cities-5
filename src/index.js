import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";


const NUMBER_PLACES = 236;

ReactDOM.render(
    <App
      numberPlaces={NUMBER_PLACES}
    />,
    document.querySelector(`#root`)
);
