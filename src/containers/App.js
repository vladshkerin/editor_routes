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
    this.setState({points: nextPoint});
  };

  render() {
    const { points } = this.state;

    return (
      <div className="App">
        <RouteContainer onAddPoints={this.onAddPointsHandler} data={points}/>
        <MapContainer/>
      </div>
    );
  }
}

export default App;
