import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {numberPlaces} = props;

  return (
    <Main numberPlaces={numberPlaces} />
  );
};

App.propTypes = {
  numberPlaces: PropTypes.number.isRequired
};


export default App;
