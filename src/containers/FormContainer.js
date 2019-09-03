import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PointFormContainer from './PointFormContainer';
import { getId } from '../utils/Utils';

class FormContainer extends Component {
  state = {
    content: '',
  };

  onChangeHandler = evt => {
    const { value } = evt.currentTarget;
    this.setState({ content: value });
  };

  onKeyDownHandler = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();

      const { content } = this.state;
      if (content.trim()) {
        this.props.onAddPoints({
          id: getId(),
          content: content,
        });

        this.setState({ content: '' });
      }

      return false;
    }
  };

  renderPoints = () => {
    const { data, onDeletePoints } = this.props;
    let pointsTemplate = null;

    if (data.length) {
      pointsTemplate = data.map(item => {
        return (
          <PointFormContainer
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
    const { content } = this.state;

    return (
      <section className="form-wrapper">
        <form className="form">
          <input className="form__input"
                 onChange={this.onChangeHandler}
                 onKeyDown={this.onKeyDownHandler}
                 type="text"
                 name="form__input"
                 placeholder="Введите наименование точки"
                 value={content}/>
          {this.renderPoints()}
        </form>
      </section>
    );
  }
}

FormContainer.propTypes = {
  data: PropTypes.array.isRequired,
  onAddPoints: PropTypes.func.isRequired,
  onDeletePoints: PropTypes.func.isRequired,
};

export default FormContainer;
