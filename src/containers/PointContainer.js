import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PointContainer extends Component {
  render() {
    const { number } = this.props

    return (
      <div className="point">
        <p className={'point__name-' + number}>Точка маршрута {number}</p>
        <button className={'point__btn-' + number}>x</button>
      </div>
    )
  }
}

PointContainer.propTypes = {
  number: PropTypes.number,
}

export default PointContainer
