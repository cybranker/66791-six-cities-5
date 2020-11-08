import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

import mainScreenProp from "../main-screen/main-screen.prop";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offerActive: {}
    };
  }

  render() {
    const {className, placeType, offers} = this.props;

    return (
      <div className={`places__list ${className}`}>
        {offers.map((offer, i) => (
          <PlaceCard key={`offer-${i}`} placeType={placeType} offer={offer} onHover={() => this.setState({offerActive: offer})} />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  placeType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  offers: mainScreenProp
};

export default PlacesList;
