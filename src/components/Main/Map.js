import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { WindowResizeListener } from 'react-window-resize-listener';
import mapTheme from './mapTheme';
import MapPin from './MapPin';
import './Map.css';

WindowResizeListener.DEBOUNCE_TIME = 50;

const GOOGLE_MAP_API_KEY = {
  key: 'AIzaSyCceGlAwHncILM7vq047eJJXQBgZN5JVe8',
};

class Map extends Component {

  constructor(props) {
    super(props);

    this.googleMap = null;
    this.currentUserCenter = props.coords;
  }

  componentWillMount() {
    this.handleMapDrag = this.handleMapDrag.bind(this);
    this.handleWindowChange = this.handleWindowChange.bind(this);
    this.handleGoogleApiLoaded = this.handleGoogleApiLoaded.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.currentUserCenter = nextProps.coords;
    if (this.googleMap) {
      this.googleMap.setCenter(this.currentUserCenter);
      this.googleMap.setZoom(nextProps.zoom);
    }
  }

  handleGoogleApiLoaded({ map }) {
    this.googleMap = map;
  }

  handleMapDrag() {
    if (this.googleMap) {
      const latLng = this.googleMap.getCenter();
      this.currentUserCenter = {
        lat: latLng.lat(),
        lng: latLng.lng(),
      };
    }
  }

  handleWindowChange() {
    if (this.googleMap) {
      this.googleMap.setCenter(this.currentUserCenter);
    }
  }


  render() {
    let mapPins;
    if (this.props.resorts) {
      mapPins = this.props.resorts.map(
        resort => (
          <MapPin
            key={resort.id}
            resort={resort}
            lat={resort.coords.lat}
            lng={resort.coords.lng}
          />
        ),
      );
    }
    const createMapOptions = maps => ({
      backgroundColor: '#FFFFFF',
      zoomControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.ZoomControlStyle.SMALL,
      },
      scrollwheel: true,
      styles: mapTheme,
    });

    return (
      <div className="Map" style={this.props.style}>
        <WindowResizeListener onResize={this.handleWindowChange} />
        <GoogleMap
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={this.handleGoogleApiLoaded}
          onDrag={this.handleMapDrag}
          center={this.props.coords}
          zoom={this.props.zoom}
          options={createMapOptions}
          bootstrapURLKeys={GOOGLE_MAP_API_KEY}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          { mapPins }
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
