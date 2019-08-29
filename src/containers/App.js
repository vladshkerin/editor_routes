import React, { Component } from 'react';
import RouteContainer from './RouteContainer';
import MapContainer from './MapContainer';

import './App.css';

class App extends Component {
  state = {
    points: [],
  };

  onAddPointsHandler = (data) => {
    const nextPoint = [...this.state.points, data];
    this.setState({ points: nextPoint });
  };

  onDeletePointsHandler = (id) => {
    const nextPoint = [...this.state.points].filter((item) => {
      return item.id !== id;
    });
    this.setState({ points: nextPoint });
  };

  render() {
    const { points } = this.state;

    return (
      <div className="App">
        <RouteContainer
          data={points}
          onAddPoints={this.onAddPointsHandler}
          onDeletePoints={this.onDeletePointsHandler}/>
        <MapContainer/>
      </div>
    );
  }
}

export default App;
