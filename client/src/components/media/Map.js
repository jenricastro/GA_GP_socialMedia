import * as React from 'react';
import Map, {NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <div className="App">
      
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: -74,
          latitude: 41,
          zoom: 6
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=MRoU2XD906he5O5xSCyJ"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default App;