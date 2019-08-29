import React, {Component} from 'react';
import RouteContainer from "./RouteContainer";
import MapContainer from "./MapContainer";

import './App.css'

class App extends Component {
    state = {
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

    render() {
        const {points} = this.state;

        return (
            <div className="App">
                <RouteContainer data={points}/>
                <MapContainer/>
            </div>
        );
    }
}

export default App;
