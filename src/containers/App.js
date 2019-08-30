import React, { Component } from 'react';
import FormContainer from './FormContainer';
import MapContainer from './MapContainer';

import './App.css';

class App extends Component {
  state = {
    points: [],
  };

  onAddPointsFormHandler = (data) => {
    const nextPoint = [...this.state.points, data];
    this.setState({ points: nextPoint });
  };

  onDeletePointsFormHandler = (id) => {
    const nextPoint = [...this.state.points].filter((item) => {
      return item.id !== id;
    });
    this.setState({ points: nextPoint });
  };

  render() {
    const { points } = this.state;

    return (
      <div className="App">
        <FormContainer
          data={points}
          onAddPoints={this.onAddPointsFormHandler}
          onDeletePoints={this.onDeletePointsFormHandler}/>
        <MapContainer
          data={points}/>
      </div>
    );
  }
}

export default App;
