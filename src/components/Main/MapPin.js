import React, { Component } from 'react';
import mapPin from './ResortInfoCard/images/pin.svg';

class MapPin extends Component{

  render() {
    return (
      <img
        onClick={()=>{alert(this.props.resort.name)}}
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
    );
  }
}

export default MapPin;
