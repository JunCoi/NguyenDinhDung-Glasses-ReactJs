import React, { Component } from 'react';

import GlassesList from './GlassesList';
import ActiveGlasses from './ActiveGlasses';

const glassesList = [
  {
    id: 0,
    name: 'GUCCI G8850U',
    price: '30',
    url: './img/v1.png',
  },
  {
    id: 1,
    name: 'GUCCI G8759H',
    price: '50',
    url: './img/v2.png',
  },
  {
    id: 2,
    name: 'DIOR D6700HQ',
    price: '30',
    url: './img/v3.png',
  },
  {
    id: 3,
    name: 'DIOR D6005U',
    price: '30',
    url: './img/v4.png',
  },
  {
    id: 4,
    name: 'PRADA P8750',
    price: '30',
    url: './img/v5.png',
  },
  {
    id: 5,
    name: 'PRADA P9700',
    price: '30',
    url: './img/v6.png',
  },
  {
    id: 6,
    name: 'FENDI F8750',
    price: '30',
    url: './img/v7.png',
  },
  {
    id: 7,
    name: 'FENDI F8500',
    price: '30',
    url: './img/v8.png',
  },
  {
    id: 8,
    name: 'FENDI F4300',
    price: '30',
    url: './img/v9.png',
  },
];

export class MainSection extends Component {
  state = {
    activeGlasses: glassesList[0],
  };
  handleChangeGlasses = (id) => {
    this.setState({
      activeGlasses: glassesList.find((glasses) => glasses.id === id),
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="container row">
          <section className="model d-flex justify-content-center col-5">
            <div
              className="card text-left"
              style={{ width: 300, position: 'relative' }}
            >
              <img
                className="card-img-top"
                src="./img/model.jpg"
                alt="hinh model"
              />

              <ActiveGlasses activeGlassesUrl={this.state.activeGlasses.url} />

              <div className="card-body">
                <span className="card-title badge-danger h3 px-2 rounded">
                  ${this.state.activeGlasses.price}
                </span>
                <p className="card-text mt-2">
                  {this.state.activeGlasses.name}
                </p>
              </div>
            </div>
          </section>

          <GlassesList
            glassesList={glassesList}
            handleChangeGlasses={this.handleChangeGlasses}
          />
        </div>
      </div>
    );
  }
}

export default MainSection;
