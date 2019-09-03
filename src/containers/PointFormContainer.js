import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PointFormContainer extends Component {
  onClickHandler = evt => {
    evt.preventDefault();

    const { id } = this.props.data;
    this.props.onDeletePoints(id);
  };

  render() {
    const { content } = this.props.data;

    return (
      <div className="point">
        <p className="point__name">{content}</p>
        <button className="point__btn" onClick={this.onClickHandler}>x</button>
      </div>
    );
  }
}

PointFormContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onDeletePoints: PropTypes.func.isRequired,
};

export default PointFormContainer;
