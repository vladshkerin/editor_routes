import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map } from 'react-yandex-maps';
import MapPointContainer from './MapPointContainer';

class MapContainer extends Component {
  renderMapPoints = () => {
    const { data } = this.props;
    let mapPointsTemplate = null;

    if (data.length) {
      mapPointsTemplate = data.map((item) => {
        return (
          <MapPointContainer/>
        );
      });
    }

    return mapPointsTemplate;
  };

  render() {
    return (
      <section className="map-wrapper">
        <YMaps>
          <Map className="map"
               defaultState={{ center: [55.75, 37.61], zoom: 9 }}>
          </Map>
          {this.renderMapPoints()}
        </YMaps>
      </section>
    );
  }
}

MapContainer.protoType = {
  data: PropTypes.array.isRequired,
};

export default MapContainer;
