import React from "react";
import Main from "../main/main";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {numberPlaces} = props;

  return (
    <Main numberPlaces={numberPlaces} />
  );
};


export default App;
