import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PointFormContainer from './PointFormContainer';
import { getId, getRandomInt } from '../utils/utils';

class FormContainer extends Component {
  state = {
    content: '',
  };

  render() {
    const { content } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEndHandler}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (

            <section className="form-wrapper">
              <form className="form">

                <input className="form__input"
                       onChange={this.onChangeHandler}
                       onKeyDown={this.onKeyDownHandler}
                       type="text"
                       name="form__input"
                       placeholder="Введите наименование точки"
                       value={content}/>
                <div className="form__list"
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                     style={getFormListStyle(snapshot.isDraggingOver)}>
                  {this.renderPoints()}
                  {provided.placeholder}
                </div>

              </form>
            </section>

          )}
        </Droppable>
      </DragDropContext>
    );
  }

  renderPoints = () => {
    const { data, onDeletePoints } = this.props;
    let pointsTemplate = null;

    if (data.length) {
      pointsTemplate = data.map((item, index) => {

        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style,
                )}>

                <PointFormContainer
                  key={item.id}
                  data={item}
                  onDeletePoints={onDeletePoints}/>

              </div>
            )}
          </Draggable>
        );
      });
    } else {
      pointsTemplate = <p className="point">Нет точек маршрута</p>;
    }

    return pointsTemplate;
  };

  onDragEndHandler = (result) => {
    const { data, onChangePoints } = this.props;
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const points = reorderPoints(
      data,
      source.index,
      destination.index,
    );

    onChangePoints(points);
  };

  onChangeHandler = evt => {
    const { value } = evt.currentTarget;
    this.setState({ content: value });
  };

  onKeyDownHandler = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();

      const { content } = this.state;
      const { onAddPoints } = this.props;
      if (content.trim()) {
        onAddPoints({
          id: getId(),
          content: content,
          coordinateX: getRandomInt(0, 350),
          coordinateY: getRandomInt(0, 350),
        });

        this.setState({ content: '' });
      }

      return false;
    }
  };
}

const grid = 1;

const getItemStyle = (isDragging, draggableStyle) => ({
  margin: `0 0 ${grid}px 0`,
  padding: grid * 2,
  userSelect: 'none',

  background: isDragging ? 'white' : '',
  boxShadow: isDragging ? '0 0 10px #cccccc' : '',
  borderRadius: '3px',

  ...draggableStyle,
});

const getFormListStyle = isDraggingOver => ({
  padding: grid,

  background: isDraggingOver ? '#f2ffe5' : 'white',
  borderRadius: '5px',
});

const reorderPoints = (list, startIndex, endIndex) => {
  const result = Array.from(list);

  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

FormContainer.propTypes = {
  data: PropTypes.array.isRequired,
  onAddPoints: PropTypes.func.isRequired,
  onDeletePoints: PropTypes.func.isRequired,
  onChangePoints: PropTypes.func.isRequired,
};

export default FormContainer;
