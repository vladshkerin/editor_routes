import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PointContainer from './PointContainer';

class RouteContainer extends Component {
  state = {
    text: '',
  };

  onChangeHandler = (evt) => {
    const { value } = evt.currentTarget;
    this.setState({ text: value });
  };

  onKeyDownHandler = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();

      const { text } = this.state;
      if (text.trim()) {
        this.props.onAddPoints({
          id: +new Date(),
          text: text,
        });

        this.setState({ text: '' });
      }

      return false;
    }
  };

  renderPoints = () => {
    const { onDeletePoints, data } = this.props;
    let pointsTemplate = null;

    if (data.length) {
      pointsTemplate = data.map((item) => {
        return (
          <PointContainer
            key={item.id}
            data={item}
            onDeletePoints={onDeletePoints}/>
        );
      });
    } else {
      pointsTemplate = <p className="point">Нет точек маршрута</p>;
    }

    return pointsTemplate;
  };

  render() {
    const { text } = this.state;

    return (
      <section className="form-wrapper">
        <form className="form">
          <input className="form__input"
                 onChange={this.onChangeHandler}
                 onKeyDown={this.onKeyDownHandler}
                 type="text"
                 name="form__input"
                 placeholder="Введите наименование точки"
                 value={text}/>
          {this.renderPoints()}
        </form>
      </section>
    );
  }
}

RouteContainer.propTypes = {
  data: PropTypes.array.isRequired,
  onAddPoints: PropTypes.func.isRequired,
  onDeletePoints: PropTypes.func.isRequired,
};

export default RouteContainer;
