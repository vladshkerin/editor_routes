import React, {Component} from 'react'
import PropTypes from 'prop-types';

class PointContainer extends Component {
    render() {
        const {number} = this.props;

        return (
            <div className="point">
                <label htmlFor="point__name">Точка маршрута {number}</label>
                <input id="point__name" type="checkbox" name="name"/>
            </div>
        )
    }
}

PointContainer.propTypes = {
    number: PropTypes.number,
};

export default PointContainer
