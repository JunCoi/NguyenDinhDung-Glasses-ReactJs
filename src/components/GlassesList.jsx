import React, { Component } from 'react';

import Glasses from './Glasses';

export class GlassesList extends Component {
  render() {
    const { glassesList, handleChangeGlasses } = this.props;

    return (
      <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
        {glassesList.map((glasses, index) => {
          return (
            <Glasses
              key={index}
              glasses={glasses}
              handleChangeGlasses={handleChangeGlasses}
            />
          );
        })}
        ;
      </section>
    );
  }
}

export default GlassesList;
