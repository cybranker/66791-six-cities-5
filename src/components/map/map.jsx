import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import "../../../node_modules/leaflet/dist/leaflet.css";
import mainScreenProp from "../main-screen/main-screen.prop";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.city = [];
    this.zoom = 0;
    this.icon = null;
    this.map = null;
  }

  renderPin(coordinates) {
    const icon = this.icon;
    const map = this.map;

    leaflet
      .marker(coordinates, {icon})
      .addTo(map);
  }

  componentDidMount() {
    const {offers, currentCity} = this.props;
    this.city = [currentCity.location.lat, currentCity.location.lon];
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
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

    this.renderPin(this.city);

    offers.forEach((offer) => {
      const {coordinates} = offer;
      this.renderPin(coordinates);
    });
  }

  componentDidUpdate() {
    const {offers, currentCity} = this.props;

    this.city = [currentCity.location.lat, currentCity.location.lon];
    this.map.setView(this.city, this.zoom);

    this.renderPin(this.city);
    offers.forEach((offer) => {
      const {coordinates} = offer;

      this.renderPin(coordinates);
    });
  }

  render() {
    return (
      <div id="map" style={{height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  currentCity: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  offers: mainScreenProp
};

export default Map;
