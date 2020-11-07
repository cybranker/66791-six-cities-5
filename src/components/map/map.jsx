import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const";
import leaflet from "leaflet";

import "../../../node_modules/leaflet/dist/leaflet.css";

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
    const {offers} = this.props;
    this.city = [offers[0].city.location.lat, offers[0].city.location.lon];
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
      const {city, coordinates} = offer;
      this.city = [city.location.lat, city.location.lon];

      this.renderPin(coordinates);
    });
  }

  componentDidUpdate() {
    console.log(this.props);
    /*const {offers} = this.props;
    this.city = [offers[0].city.location.lat, offers[0].city.location.lon];
    this.map.setView(this.city, this.zoom);*/
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
        city: PropTypes.shape({
          location: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lon: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          }).isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
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
