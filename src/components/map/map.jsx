import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const";
import leaflet from "leaflet";

import "../../../node_modules/leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    function renderPin(coordinates) {
      leaflet
        .marker(coordinates, {icon})
        .addTo(map);
    }

    renderPin([52.3709553943508, 4.89309666406198]);

    offers.forEach((offer) => {
      const {coordinates} = offer;

      renderPin(coordinates);
    });

  }

  render() {
    return (
      <div id="map" style={{height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.shape({
          src: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.array.isRequired,
        isPremium: PropTypes.bool.isRequired,
        type: PropTypes.oneOf([
          OfferType.APARTMENT,
          OfferType.HOTEL,
          OfferType.HOUSE,
          OfferType.ROOM
        ]).isRequired,
        rating: PropTypes.number.isRequired,
        numberBedrooms: PropTypes.number.isRequired,
        maxGuests: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        features: PropTypes.array.isRequired,
        manager: PropTypes.shape({
          picture: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired
        }).isRequired,
        isFavorite: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired
};

export default Map;
