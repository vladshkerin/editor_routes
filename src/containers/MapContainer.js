import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map } from 'react-yandex-maps';
import LineMap from './LineMap';
import PointMapContainer from './PointMapContainer';

class MapContainer extends Component {
  state = {
    center: [55.75, 37.61],
    zoom: 9,
  };

  renderPointsMap = () => {
    const { data } = this.props;
    let pointsTemplate = null;

    if (data.length) {
      pointsTemplate = data.map(item => {
        const { id, coordinateX: x, coordinateY: y } = item;
        return (
          <PointMapContainer key={id} x={x} y={y}/>
        );
      });
    }

    return pointsTemplate;
  };

  renderLinesMap = () => {
    const { data } = this.props;

    if (data.length) {
      const coordinates = data.map(item => ({
        x: item.coordinateX,
        y: item.coordinateY,
      }));

      return <LineMap className="map-line" data={coordinates}/>;
    }

    return null;
  };

  render() {
    return (
      <section className="map-wrapper">
        <YMaps>
          <Map className="map"
               defaultState={this.state}>
          </Map>
          {this.renderPointsMap()}
          {this.renderLinesMap()}
        </YMaps>
      </section>
    );
  }
}

MapContainer.protoType = {
  data: PropTypes.array.isRequired,
};

export default MapContainer;
