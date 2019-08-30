import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class MapContainer extends Component {

  render() {
    return (
      <section className="map-wrapper">
        <YMaps>
          <Map defaultState={{ center: [55.75, 37.61], zoom: 9 }}
               className="map">
            <Placemark defaultGeometry={[55.75, 37.61]}
                       options={{ draggable: 'true' }}/>
          </Map>
        </YMaps>
      </section>
    );
  }
}

export default MapContainer;
