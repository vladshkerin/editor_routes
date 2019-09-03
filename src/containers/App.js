import React, { Component } from 'react';
import FormContainer from './FormContainer';
import MapContainer from './MapContainer';
import { getPoints } from '../utils/Utils';

import './App.css';

class App extends Component {
  state = {
    points: getPoints(10),
  };

  onAddPointsFormHandler = data => {
    const nextPoint = [...this.state.points, data];
    this.setState({ points: nextPoint });
  };

  onDeletePointsFormHandler = id => {
    const nextPoint = [...this.state.points].filter((item) => {
      return item.id !== id;
    });
    this.setState({ points: nextPoint });
  };

  onChangePointsFromHandler = points => {
    this.setState({ points });
  };

  render() {
    const { points } = this.state;

    return (
      <div className="App">
        <FormContainer
          data={points}
          onAddPoints={this.onAddPointsFormHandler}
          onDeletePoints={this.onDeletePointsFormHandler}
          onChangePoints={this.onChangePointsFromHandler}/>
        <MapContainer
          data={points}/>
      </div>
    );
  }
}

export default App;
