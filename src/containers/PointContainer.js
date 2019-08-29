import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PointContainer extends Component {
  onClickHandler = (evt) => {
    evt.preventDefault();

    const { id } = this.props.data;
    this.props.onDeletePoints(id);
  };

  render() {
    const { text } = this.props.data;

    return (
      <div className="point">
        <p className="point__name">{text}</p>
        <button className="point__btn" onClick={this.onClickHandler}>x</button>
      </div>
    );
  }
}

PointContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
  onDeletePoints: PropTypes.func.isRequired,
};

export default PointContainer;
