import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getPointStyle = (x, y) => ({
  top: x + 'px',
  left: y + 'px',
});

class PointMapContainer extends Component {
  render() {
    const { x, y } = this.props;

    return (
      <div className="map-point"
           style={getPointStyle(x, y)}/>
    );
  }
}

PointMapContainer.protoType = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default PointMapContainer;
