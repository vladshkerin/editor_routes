import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LineMap extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const crd = this.props.data;
    const offset = 8;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(crd[0].y + offset, crd[0].x + offset);
    for (let i = 1; i < crd.length; i++) {
      ctx.lineTo(crd[i].y + offset, crd[i].x + offset);
    }
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'gray';
    ctx.stroke();
  };

  render() {
    return (
      <canvas className="map-canvas" ref="canvas" width={460} height={460}/>
    );
  }
}

LineMap.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LineMap;
