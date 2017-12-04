import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import Snow from './Snow';

class MapPin extends Component{

  render() {
    let snow;
    if (this.props.resort.weather.condition === 'snow') {
      snow = (<Snow />);
    }
    return (
      <Link
        to={`/resorts/${this.props.resort.shortName}`}
        style={{ position: 'relative' }}
      >
        {snow}
        <img
          alt="Map Pin"
          src={this.props.resort.logo}
          style={{
            height: '40px',
            width: '40px',
            userSelect: 'none',
          }}
        />
      </Link>
    );
  }
}

export default MapPin;
