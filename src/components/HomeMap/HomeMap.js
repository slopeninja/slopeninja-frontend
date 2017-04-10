import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import mapTheme from '../Main/mapTheme';
import './HomeMap.css';

const GOOGLE_MAP_API_KEY = {
  key: 'AIzaSyCceGlAwHncILM7vq047eJJXQBgZN5JVe8',
};

class Map extends Component {

  constructor(props) {
    super(props);

    this.googleMap = null;
    this.currentUserCenter = props.coords;
  }

  render() {
    const createMapOptions = maps => (
      {
        zoomControlOptions: {
          position: maps.ControlPosition.TOP_RIGHT,
          style: maps.ZoomControlStyle.SMALL,
        },
        scrollwheel: true,
        styles: mapTheme,
      }
    );


    return (
      <div className="HomeMap">
        <GoogleMap
          center={{ lat: 39.0898559, lng: -120.014292 }}
          zoom={11}
          options={createMapOptions}
          bootstrapURLKeys={GOOGLE_MAP_API_KEY}
        />
      </div>
    );
  }
}


export default Map;

// <MapPin
//   lat={38.7993502}
//   lng={-120.0830997}
// />
