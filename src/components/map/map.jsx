import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import "../../../node_modules/leaflet/dist/leaflet.css";
import mainScreenProp from "../main-screen/main-screen.prop";
import placeCardProp from "../place-card/place-card.prop";

const ICON_SIZE = [30, 30];
const ICON_SRC = `img/pin.svg`;
const ACTIVE_ICON_SRC = `img/pin-active.svg`;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.city = [];
    this.zoom = 0;
    this.pin = leaflet.icon({
      iconUrl: ICON_SRC,
      iconSize: ICON_SIZE
    });
    this.pinActive = leaflet.icon({
      iconUrl: ACTIVE_ICON_SRC,
      iconSize: ICON_SIZE
    });
    this.icon = null;
    this.map = null;
    this.currentOffer = [];
  }

  renderPin(coordinates) {
    const icon = this.icon;
    const map = this.map;

    leaflet
      .marker(coordinates, {icon})
      .addTo(map);
  }

  renderCurrentOffer(location) {
    if (location) {
      this.currentOffer = [location.latitude, location.longitude];
      this.icon = this.pinActive;
      this.renderPin(this.currentOffer);
    }
  }

  componentDidMount() {
    const {test} = this.props;

    if (!test) {
      const {offers, currentCity, currentOfferLocation} = this.props;
      this.city = [currentCity.location.lat, currentCity.location.lon];
      this.icon = this.pin;
      this.zoom = 12;
      this.map = leaflet.map(`map`, {
        center: this.city,
        zoom: this.zoom,
        zoomControl: false,
        marker: true
      });
      this.map.setView(this.city, this.zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      this.renderCurrentOffer(currentOfferLocation);

      offers.forEach((offer) => {
        const {coordinates} = offer;

        this.icon = this.pin;
        this.renderPin(coordinates);
      });
    }
  }

  componentDidUpdate() {
    const {test} = this.props;

    if (!test) {
      const {offers, currentCity, offerActive, currentOfferLocation} = this.props;
      this.city = [currentCity.location.lat, currentCity.location.lon];
      this.map.setView(this.city, this.zoom);
      this.icon = this.pin;

      this.map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          this.map.removeLayer(layer);
        }
      });

      this.renderCurrentOffer(currentOfferLocation);

      offers.forEach((offer) => {
        const {coordinates} = offer;

        if (offer.id === offerActive.id) {
          this.icon = this.pinActive;
        } else {
          this.icon = this.pin;
        }

        this.renderPin(coordinates);
      });
    }
  }

  render() {
    return (
      <div id="map" style={{height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  test: PropTypes.bool,
  currentCity: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  currentOfferLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  offers: mainScreenProp,
  offerActive: PropTypes.oneOfType([PropTypes.shape(), placeCardProp]).isRequired
};

export default Map;
