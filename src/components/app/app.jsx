import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";


const App = (props) => {
  const {numberPlaces} = props;

  return (
    <MainScreen numberPlaces={numberPlaces} />
  );
};

App.propTypes = {
  numberPlaces: PropTypes.number.isRequired
};


export default App;
