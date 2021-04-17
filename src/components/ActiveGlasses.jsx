import React, { Component } from 'react';

export class ActiveGlasses extends Component {
  render() {
    let { activeGlassesUrl } = this.props;
    return (
      <img
        src={activeGlassesUrl}
        alt="kinh"
        style={{
          width: 170,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '16%',
        }}
      />
    );
  }
}

export default ActiveGlasses;
