import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PointContainer extends Component {
  render() {
    const { text } = this.props.data;

    return (
      <div className="point">
        <p className="point__name">{text}</p>
        <button className="point__btn">x</button>
      </div>
    );
  }
}

PointContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default PointContainer;
