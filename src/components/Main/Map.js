import React, { Component } from 'react';
import './Map.css';
import GoogleMap from 'google-map-react';

const MapPin = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

const GOOGLE_MAP_KEY = 'AIzaSyCceGlAwHncILM7vq047eJJXQBgZN5JVe8';

const SIERRA_AT_TAHOE_COORDS = {
  lat: 38.7993502,
  lng: -120.0830997,
};

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      center: SIERRA_AT_TAHOE_COORDS,
      zoom: 14,
    };

    this.handleMapChange = this.handleMapChange.bind(this);
  }

  handleMapChange({ center, zoom }) {
    console.log(center, SIERRA_AT_TAHOE_COORDS);
    this.setState({
      center: SIERRA_AT_TAHOE_COORDS,
      zoom,
    });
  }

  render() {
    return (
      <div className="Map">
        <GoogleMap
          bootstrapURLKeys={{
            key: GOOGLE_MAP_KEY,
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onChange={this.handleMapChange}
        >
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
