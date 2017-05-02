import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import mapPin from './ResortInfoCard/images/pin.svg';

class MapPin extends Component{

  render() {
    return (
      <Link
        to={`/resorts/${this.props.resort.id}`}
      >
        <img
          alt="Map Pin"
          src={this.props.resort.logo}
          style={{
            position: 'relative',
            height: '40px',
            width: '40px',
            top: -50,
            left: -3,
          }}
        />
      </Link>
    );
  }
}

export default MapPin;
