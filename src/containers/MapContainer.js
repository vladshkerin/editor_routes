import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map } from 'react-yandex-maps';
import PointMapContainer from './PointMapContainer';

class MapContainer extends Component {
  state = {
    center: [55.75, 37.61],
    zoom: 9,
  };

  renderMapPoints = () => {
    const { data } = this.props;
    let pointsTemplate = null;

    if (data.length) {
      pointsTemplate = data.map(item => {
        return (
          <PointMapContainer key={item.id}/>
        );
      });
    }

    return pointsTemplate;
  };

  render() {
    return (
      <section className="map-wrapper">
        <YMaps>
          <Map className="map"
               defaultState={this.state}>
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
