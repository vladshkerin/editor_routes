import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PointContainer from './PointContainer';

class RouteContainer extends Component {
  state = {
    newPoint: '',
  };

  renderPoints = () => {
    const { data } = this.props;
    let pointsTemplate = null;

    if (data.length) {
      pointsTemplate = data.map((item) => {
        return <PointContainer key={item} number={item}/>;
      });
    } else {
      pointsTemplate = <p>Нет точек маршрута</p>;
    }

    return pointsTemplate;
  };

  handlerChange = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  render() {
    const { newPoint } = this.state;

    return (
      <section className="form-wrapper">
        <form className="form">
          <input id="newPoint"
                 className="form__input"
                 onChange={this.handlerChange}
                 type="text"
                 name="form__input"
                 placeholder="Новая точка маршрута"
                 value={newPoint}/>
          {this.renderPoints()}
        </form>
      </section>
    );
  }
}

RouteContainer.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RouteContainer;
