import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LineMap extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const crd = this.props.data;
    const ctx = this.refs.canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(crd[0].y + 5, crd[0].x + 10);
    for (let i = 1; i < crd.length; i++) {
      ctx.lineTo(crd[i].y + 5, crd[i].x + 10);
    }
    ctx.stroke();
  }

  render() {
    return (
      <canvas className="map-canvas" ref="canvas" width={360} height={360}/>
    );
  }
}

LineMap.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LineMap;
