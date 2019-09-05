import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PointFormContainer extends Component {
  render() {
    const { content } = this.props.data;

    return (
      <div className="point">
        <p className="point__name">{content}</p>
        <button className="point__btn" onClick={this.onClickHandler}>x</button>
      </div>
    );
  }

  onClickHandler = evt => {
    evt.preventDefault();

    const { id } = this.props.data;
    this.props.onDeletePoints(id);
  };
}

PointFormContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onDeletePoints: PropTypes.func.isRequired,
};

export default PointFormContainer;
